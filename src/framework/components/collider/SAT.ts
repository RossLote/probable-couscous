import {Vector2} from '../../math/Vector2';


interface ICollider {
    position: Vector2
}


// ## Circle
//
// Represents a circle with a position and a radius.

// Create a new circle, optionally passing in a position and/or radius. If no position
// is given, the circle will be at `(0,0)`. If no radius is provided, the circle will
// have a radius of `0`.
export class Circle implements ICollider {

    /**
     * @param {Vector=} position A vector representing the position of the center of the circle
     * @param {?number=} radius The radius of the circle
     * @constructor
     */
    constructor(public position: Vector2 = Vector2.ZERO, public radius: number = 0) {}

    // Compute the axis-aligned bounding box (AABB) of this Circle.
    //
    // Note: Returns a _new_ `Polygon` each time you call this.
    /**
     * @return {Polygon} The AABB
     */
    getAABB() {
        let radius = this.radius;
        let corner = this.position.clone().subtract(new Vector2(radius, radius));
        return new Box(corner, radius*2, radius*2).toPolygon();
    };
}



// ## Polygon
//
// Represents a *convex* polygon with any number of points (specified in counter-clockwise order)
//
// Note: Do _not_ manually change the `points`, `angle`, or `offset` properties. Use the
// provided setters. Otherwise the calculated properties will not be updated correctly.
//
// `pos` can be changed directly.

// Create a new polygon, passing in a position vector, and an array of points (represented
// by vectors relative to the position vector). If no position is passed in, the position
// of the polygon will be `(0,0)`.
export class Polygon implements ICollider {
    offset: Vector2 = Vector2.ZERO;
    angle: number = 0
    points: Array<Vector2> = []
    calcPoints: Array<Vector2> = [];
    edges: Array<Vector2> = [];
    normals: Array<Vector2> = [];


    /**
     * @param {Vector=} posistion A vector representing the origin of the polygon. (all other
     *   points are relative to this one)
     * @param {Array.<Vector>=} points An array of vectors representing the points in the polygon,
     *   in counter-clockwise order.
     * @constructor
     */
    constructor(public position: Vector2 = Vector2.ZERO, points: Array<Vector2>){
        this.setPoints(points);
    }

    // Set the points of the polygon.
    //
    // Note: The points are counter-clockwise *with respect to the coordinate system*.
    // If you directly draw the points on a screen that has the origin at the top-left corner
    // it will _appear_ visually that the points are being specified clockwise. This is just
    // because of the inversion of the Y-axis when being displayed.
    /**
     * @param {Array.<Vector>=} points An array of vectors representing the points in the polygon,
     *   in counter-clockwise order.
     * @return {Polygon} This for chaining.
     */
    setPoints(points: Array<Vector2> = new Array<Vector2>()): Polygon {
        let lengthChanged = !this.points || this.points.length !== points.length;
        if (lengthChanged) {
          let calcPoints: Array<Vector2> = this.calcPoints = [];
          let edges: Array<Vector2> = this.edges = [];
          let normals: Array<Vector2> = this.normals = [];
          // Allocate the vector arrays for the calculated properties
          for (let i = 0; i < points.length; i++) {
            calcPoints.push(new Vector2());
            edges.push(new Vector2());
            normals.push(new Vector2());
          }
        }
        this.points = points;
        this.recalculate();
        return this;
    }

    // Computes the calculated collision polygon. Applies the `angle` and `offset` to the original points then recalculates the
    // edges and normals of the collision polygon.
    /**
     * @return {Polygon} This for chaining.
     */
    private recalculate(): Polygon {

        //TODO: make this dirty

        // Calculated points - this is what is used for underlying collisions and takes into account
        // the angle/offset set on the polygon.
        let calcPoints = this.calcPoints;
        // The edges here are the direction of the `n`th edge of the polygon, relative to
        // the `n`th point. If you want to draw a given edge from the edge value, you must
        // first translate to the position of the starting point.
        let edges = this.edges;
        // The normals here are the direction of the normal for the `n`th edge of the polygon, relative
        // to the position of the `n`th point. If you want to draw an edge normal, you must first
        // translate to the position of the starting point.
        let normals = this.normals;
        // Copy the original points array and apply the offset/angle
        let points = this.points;
        let offset = this.offset;
        let angle = this.angle;
        let len = points.length;
        for (let i = 0; i < len; i++) {
            let calcPoint = calcPoints[i].copy(points[i]);
            calcPoint.x += offset.x;
            calcPoint.y += offset.y;
            if (angle !== 0) {
                calcPoint.rotate(angle);
            }
        }
        // Calculate the edges/normals
        for (let i = 0; i < len; i++) {
            let p1 = calcPoints[i];
            let p2 = i < len - 1 ? calcPoints[i + 1] : calcPoints[0];
            let e = edges[i].copy(p2).subtract(p1);
            normals[i].copy(e).perpendicular().normalize();
        }
        return this;
    };

    // Set the current rotation angle of the polygon.
    /**
     * @param {number} angle The current rotation angle (in radians).
     * @return {Polygon} This for chaining.
     */
    setAngle(angle: number): Polygon {
        this.angle = angle;
        this.recalculate();
        return this;
    };

    // Set the current offset to apply to the `points` before applying the `angle` rotation.
    /**
     * @param {Vector} offset The new offset vector.
     * @return {Polygon} This for chaining.
     */
    setOffset(offset: Vector2): Polygon {
        this.offset = offset;
        this.recalculate();
        return this;
    };

    // Rotates this polygon counter-clockwise around the origin of *its local coordinate system* (i.e. `pos`).
    //
    // Note: This changes the **original** points (so any `angle` will be applied on top of this rotation).
    /**
     * @param {number} angle The angle to rotate (in radians)
     * @return {Polygon} This for chaining.
     */
    rotate(angle: number): Polygon {
        let points = this.points;
        let len = points.length;
        for (let i = 0; i < len; i++) {
            points[i].rotate(angle);
        }
        this.recalculate();
        return this;
    };

    // Translates the points of this polygon by a specified amount relative to the origin of *its own coordinate
    // system* (i.e. `pos`).
    //
    // This is most useful to change the "center point" of a polygon. If you just want to move the whole polygon, change
    // the coordinates of `pos`.
    //
    // Note: This changes the **original** points (so any `offset` will be applied on top of this translation)
    /**
     * @param {number} x The horizontal amount to translate.
     * @param {number} y The vertical amount to translate.
     * @return {Polygon} This for chaining.
     */
     translate(x: number, y: number): Polygon {
        let points = this.points;
        let len = points.length;
        for (let i = 0; i < len; i++) {
            points[i].x += x;
            points[i].y += y;
        }
        this.recalculate();
        return this;
    };



    // Compute the axis-aligned bounding box. Any current state
    // (translations/rotations) will be applied before constructing the AABB.
    //
    // Note: Returns a _new_ `Polygon` each time you call this.
    /**
     * @return {Polygon} The AABB
     */
    getAABB(): Polygon {
        let points = this.calcPoints;
        let len = points.length;
        let xMin = points[0].x;
        let yMin = points[0].y;
        let xMax = points[0].x;
        let yMax = points[0].y;
        for (let i = 1; i < len; i++) {
            let point = points[i];
            if (point.x < xMin) {
                xMin = point.x;
            }
            else if (point.x > xMax) {
                xMax = point.x;
            }
            if (point.y < yMin) {
                yMin = point.y;
            }
            else if (point.y > yMax) {
                yMax = point.y;
            }
        }
        return new Box(this.position.clone().add(new Vector2(xMin, yMin)), xMax - xMin, yMax - yMin).toPolygon();
    };

    // Compute the centroid (geometric center) of the polygon. Any current state
    // (translations/rotations) will be applied before computing the centroid.
    //
    // See https://en.wikipedia.org/wiki/Centroid#Centroid_of_a_polygon
    //
    // Note: Returns a _new_ `Vector` each time you call this.
    /**
     * @return {Vector} A Vector that contains the coordinates of the Centroid.
     */
    getCentroid(): Vector2 {
        let points = this.calcPoints;
        let len = points.length;
        let cx = 0;
        let cy = 0;
        let ar = 0;
        for (let i = 0; i < len; i++) {
            let p1 = points[i];
            let p2 = i === len - 1 ? points[0] : points[i+1]; // Loop around if last point
            let a = p1.x * p2.y - p2.x * p1.y;
            cx += (p1.x + p2.x) * a;
            cy += (p1.y + p2.y) * a;
            ar += a;
        }
        ar = ar * 3; // we want 1 / 6 the area and we currently have 2*area
        cx = cx / ar;
        cy = cy / ar;
        return new Vector2(cx, cy);
    };
}


// ## Box
//
// Represents an axis-aligned box, with a width and height.


// Create a new box, with the specified position, width, and height. If no position
// is given, the position will be `(0,0)`. If no width or height are given, they will
// be set to `0`.
export class Box implements ICollider {
    /**
     * @param {Vector=} position A vector representing the bottom-left of the box (i.e. the smallest x and smallest y value).
     * @param {?number=} width The width of the box.
     * @param {?number=} height The height of the box.
     * @constructor
     */
    constructor(public position: Vector2 = Vector2.ZERO, public width: number = 0, public height: number = 0) {}
    // Returns a polygon whose edges are the same as this box.
    /**
     * @return {Polygon} A new Polygon that represents this box.
     */
    toPolygon(): Polygon {
        let pos = this.position;
        let w = this.width;
        let h = this.height;
        return new Polygon(
            new Vector2(pos.x, pos.y),
            [
                new Vector2(),
                new Vector2(w, 0),
                new Vector2(w,h),
                new Vector2(0,h)
            ]
        );
    };
}



  // ## Response
  //
  // An object representing the result of an intersection. Contains:
  //  - The two objects participating in the intersection
  //  - The vector representing the minimum change necessary to extract the first object
  //    from the second one (as well as a unit vector in that direction and the magnitude
  //    of the overlap)
  //  - Whether the first object is entirely inside the second, and vice versa.
export class Response {
    aInB: boolean;
    bInA: boolean;
    overlap: number;
    a: ICollider = null;
    b: ICollider = null;
    overlapN: Vector2 = new Vector2();
    overlapV: Vector2 = new Vector2();

    constructor() {
        this.clear();
    }


    // Set some values of the response back to their defaults.  Call this between tests if
    // you are going to reuse a single Response object for multiple intersection tests (recommented
    // as it will avoid allcating extra memory)
    /**
     * @return {Response} This for chaining
     */
    clear(): Response {
        this.aInB = true;
        this.bInA = true;
        this.overlap = Number.MAX_VALUE;
        return this;
    };

}

// ## Object Pools

// A pool of `Vector` objects that are used in calculations to avoid
// allocating memory.
/**
 * @type {Array.<Vector>}
 */
const T_VECTORS: Array<Vector2> = [];
for (let i = 0; i < 10; i++) {
    T_VECTORS.push(new Vector2());
}

// A pool of arrays of numbers used in calculations to avoid allocating
// memory.
/**
 * @type {Array.<Array.<number>>}
 */
const T_ARRAYS: Array<Array<number>> = [];
for (let i = 0; i < 5; i++) {
    T_ARRAYS.push([]);
}

// Temporary response used for polygon hit detection.
/**
 * @type {Response}
 */
const T_RESPONSE: Response = new Response();

// Tiny "point" polygon used for polygon hit detection.
/**
 * @type {Polygon}
 */
const TEST_POINT: Polygon = new Box(new Vector2(), 0.000001, 0.000001).toPolygon();

// ## Helper Functions

// Flattens the specified array of points onto a unit vector axis,
// resulting in a one dimensional range of the minimum and
// maximum value on that axis.
/**
 * @param {Array.<Vector>} points The points to flatten.
 * @param {Vector} normal The unit vector axis to flatten on.
 * @param {Array.<number>} result An array.  After calling this function,
 *   result[0] will be the minimum value,
 *   result[1] will be the maximum value.
 */
export function flattenPointsOn(points: Array<Vector2>, normal: Vector2, result: Array<number>) {
    let min: number = Number.MAX_VALUE;
    let max: number = -Number.MAX_VALUE;
    let len: number = points.length;
    for (let i = 0; i < len; i++ ) {
        // The magnitude of the projection of the point onto the normal
        let dot: number = points[i].dot(normal);
        if (dot < min) { min = dot; }
        if (dot > max) { max = dot; }
    }
    result[0] = min; result[1] = max;
}

// Check whether two convex polygons are separated by the specified
// axis (must be a unit vector).
/**
 * @param {Vector} aPos The position of the first polygon.
 * @param {Vector} bPos The position of the second polygon.
 * @param {Array.<Vector>} aPoints The points in the first polygon.
 * @param {Array.<Vector>} bPoints The points in the second polygon.
 * @param {Vector} axis The axis (unit sized) to test against.  The points of both polygons
 *   will be projected onto this axis.
 * @param {Response=} response A Response object (optional) which will be populated
 *   if the axis is not a separating axis.
 * @return {boolean} true if it is a separating axis, false otherwise.  If false,
 *   and a response is passed in, information about how much overlap and
 *   the direction of the overlap will be populated.
 */
export function isSeparatingAxis(aPos: Vector2, bPos: Vector2, aPoints: Array<Vector2>, bPoints: Array<Vector2>, axis: Vector2, response: Response): boolean {
    let rangeA = T_ARRAYS.pop();
    let rangeB = T_ARRAYS.pop();
    // The magnitude of the offset between the two polygons
    let offsetV = T_VECTORS.pop().copy(bPos).subtract(aPos);
    let projectedOffset = offsetV.dot(axis);
    // Project the polygons onto the axis.
    flattenPointsOn(aPoints, axis, rangeA);
    flattenPointsOn(bPoints, axis, rangeB);
    // Move B's range to its position relative to A.
    rangeB[0] += projectedOffset;
    rangeB[1] += projectedOffset;
    // Check if there is a gap. If there is, this is a separating axis and we can stop
    if (rangeA[0] > rangeB[1] || rangeB[0] > rangeA[1]) {
        T_VECTORS.push(offsetV);
        T_ARRAYS.push(rangeA);
        T_ARRAYS.push(rangeB);
        return true;
    }
    // This is not a separating axis. If we're calculating a response, calculate the overlap.
    if (response) {
        let overlap = 0;
        // A starts further left than B
        if (rangeA[0] < rangeB[0]) {
            response.aInB = false;
            // A ends before B does. We have to pull A out of B
            if (rangeA[1] < rangeB[1]) {
                overlap = rangeA[1] - rangeB[0];
                response.bInA = false;
            // B is fully inside A.    Pick the shortest way out.
            } else {
                let option1 = rangeA[1] - rangeB[0];
                let option2 = rangeB[1] - rangeA[0];
                overlap = option1 < option2 ? option1 : -option2;
            }
        // B starts further left than A
        } else {
            response.bInA = false;
            // B ends before A ends. We have to push A out of B
            if (rangeA[1] > rangeB[1]) {
                overlap = rangeA[0] - rangeB[1];
                response.aInB = false;
            // A is fully inside B.    Pick the shortest way out.
            } else {
                let option1 = rangeA[1] - rangeB[0];
                let option2 = rangeB[1] - rangeA[0];
                overlap = option1 < option2 ? option1 : -option2;
            }
        }
        // If this is the smallest amount of overlap we've seen so far, set it as the minimum overlap.
        let absOverlap = Math.abs(overlap);
        if (absOverlap < response.overlap) {
            response.overlap = absOverlap;
            response.overlapN.copy(axis);
            if (overlap < 0) {
                response.overlapN.reverse();
            }
        }
    }
    T_VECTORS.push(offsetV);
    T_ARRAYS.push(rangeA);
    T_ARRAYS.push(rangeB);
    return false;
}

// Calculates which Voronoi region a point is on a line segment.
// It is assumed that both the line and the point are relative to `(0,0)`
//
//            |       (0)      |
//     (-1)  [S]--------------[E]  (1)
//            |       (0)      |
/**
 * @param {Vector} line The line segment.
 * @param {Vector} point The point.
 * @return  {number} LEFT_VORONOI_REGION (-1) if it is the left region,
 *          MIDDLE_VORONOI_REGION (0) if it is the middle region,
 *          RIGHT_VORONOI_REGION (1) if it is the right region.
 */
export function voronoiRegion(line: Vector2, point: Vector2): number {
    let len2 = line.lengthSquared();
    let dp = point.dot(line);
    // If the point is beyond the start of the line, it is in the
    // left voronoi region.
    if (dp < 0) {
      return LEFT_VORONOI_REGION;
    }
    // If the point is beyond the end of the line, it is in the
    // right voronoi region.
    else if (dp > len2) {
        return RIGHT_VORONOI_REGION;
    }
    // Otherwise, it's in the middle one.
    else {
        return MIDDLE_VORONOI_REGION;
    }
}
// Constants for Voronoi regions
/**
 * @const
 */
const LEFT_VORONOI_REGION: number = -1;
/**
 * @const
 */
const MIDDLE_VORONOI_REGION: number = 0;
/**
 * @const
 */
const RIGHT_VORONOI_REGION: number = 1;

// ## Collision Tests

// Check if a point is inside a circle.
/**
 * @param {Vector} point The point to test.
 * @param {Circle} circle The circle to test.
 * @return {boolean} true if the point is inside the circle, false if it is not.
 */
export function pointInCircle(point: Vector2, circle: Circle): boolean {
    let differenceV = T_VECTORS.pop().copy(point).subtract(circle.position);
    let radiusSq = circle.radius * circle.radius;
    let distanceSq = differenceV.lengthSquared();
    T_VECTORS.push(differenceV);
    // If the distance between is smaller than the radius then the point is inside the circle.
    return distanceSq <= radiusSq;
}

// Check if a point is inside a convex polygon.
/**
 * @param {Vector} point The point to test.
 * @param {Polygon} polygon The polygon to test.
 * @return {boolean} true if the point is inside the polygon, false if it is not.
 */
export function pointInPolygon(point: Vector2, polygon: Polygon): boolean {
    TEST_POINT.position.copy(point);
    T_RESPONSE.clear();
    let result = testPolygonPolygon(TEST_POINT, polygon, T_RESPONSE);
    if (result) {
        result = T_RESPONSE.aInB;
    }
    return result;
}

// Check if two circles collide.
/**
 * @param {Circle} a The first circle.
 * @param {Circle} b The second circle.
 * @param {Response=} response Response object (optional) that will be populated if
 *   the circles intersect.
 * @return {boolean} true if the circles intersect, false if they don't.
 */
export function testCircleCircle(a: Circle, b: Circle, response: Response): boolean {
    // Check if the distance between the centers of the two
    // circles is greater than their combined radius.
    let differenceV = T_VECTORS.pop().copy(b.position).subtract(a.position);
    let totalRadius = a.radius + b.radius;
    let totalRadiusSq = totalRadius * totalRadius;
    let distanceSq = differenceV.lengthSquared();
    // If the distance is bigger than the combined radius, they don't intersect.
    if (distanceSq > totalRadiusSq) {
        T_VECTORS.push(differenceV);
        return false;
    }
    // They intersect. If we're calculating a response, calculate the overlap.
    if (response) {
        let dist = Math.sqrt(distanceSq);
        response.a = a;
        response.b = b;
        response.overlap = totalRadius - dist;
        response.overlapN.copy(differenceV.normalize());
        response.overlapV.copy(differenceV).scale(response.overlap);
        response.aInB= a.radius <= b.radius && dist <= b.radius - a.radius;
        response.bInA = b.radius <= a.radius && dist <= a.radius - b.radius;
    }
    T_VECTORS.push(differenceV);
    return true;
}

// Check if a polygon and a circle collide.
/**
 * @param {Polygon} polygon The polygon.
 * @param {Circle} circle The circle.
 * @param {Response=} response Response object (optional) that will be populated if
 *   they interset.
 * @return {boolean} true if they intersect, false if they don't.
 */
export function testPolygonCircle(polygon: Polygon, circle: Circle, response: Response): boolean {
    // Get the position of the circle relative to the polygon.
    let circlePos = T_VECTORS.pop().copy(circle.position).subtract(polygon.position);
    let radius = circle.radius;
    let radius2 = radius * radius;
    let points = polygon.calcPoints;
    let len = points.length;
    let edge = T_VECTORS.pop();
    let point = T_VECTORS.pop();

    // For each edge in the polygon:
    for (let i = 0; i < len; i++) {
        let next = i === len - 1 ? 0 : i + 1;
        let prev = i === 0 ? len - 1 : i - 1;
        let overlap = 0;
        let overlapN = null;

        // Get the edge.
        edge.copy(polygon.edges[i]);
        // Calculate the center of the circle relative to the starting point of the edge.
        point.copy(circlePos).subtract(points[i]);

        // If the distance between the center of the circle and the point
        // is bigger than the radius, the polygon is definitely not fully in
        // the circle.
        if (response && point.lengthSquared() > radius2) {
            response.aInB = false;
        }

        // Calculate which Voronoi region the center of the circle is in.
        let region = voronoiRegion(edge, point);
        // If it's the left region:
        if (region === LEFT_VORONOI_REGION) {
            // We need to make sure we're in the RIGHT_VORONOI_REGION of the previous edge.
            edge.copy(polygon.edges[prev]);
            // Calculate the center of the circle relative the starting point of the previous edge
            let point2 = T_VECTORS.pop().copy(circlePos).subtract(points[prev]);
            region = voronoiRegion(edge, point2);
            if (region === RIGHT_VORONOI_REGION) {
                // It's in the region we want.    Check if the circle intersects the point.
                let dist = point.length();
                if (dist > radius) {
                    // No intersection
                    T_VECTORS.push(circlePos);
                    T_VECTORS.push(edge);
                    T_VECTORS.push(point);
                    T_VECTORS.push(point2);
                    return false;
                } else if (response) {
                    // It intersects, calculate the overlap.
                    response.bInA = false;
                    overlapN = point.normalize();
                    overlap = radius - dist;
                }
            }
            T_VECTORS.push(point2);
        // If it's the right region:
        } else if (region === RIGHT_VORONOI_REGION) {
            // We need to make sure we're in the left region on the next edge
            edge.copy(polygon.edges[next]);
            // Calculate the center of the circle relative to the starting point of the next edge.
            point.copy(circlePos).subtract(points[next]);
            region = voronoiRegion(edge, point);
            if (region === LEFT_VORONOI_REGION) {
                // It's in the region we want.    Check if the circle intersects the point.
                let dist = point.length();
                if (dist > radius) {
                    // No intersection
                    T_VECTORS.push(circlePos);
                    T_VECTORS.push(edge);
                    T_VECTORS.push(point);
                    return false;
                } else if (response) {
                    // It intersects, calculate the overlap.
                    response.bInA = false;
                    overlapN = point.normalize();
                    overlap = radius - dist;
                }
            }
        // Otherwise, it's the middle region:
        } else {
            // Need to check if the circle is intersecting the edge,
            // Change the edge into its "edge normal".
            let normal = edge.perpendicular().normalize();
            // Find the perpendicular distance between the center of the
            // circle and the edge.
            let dist = point.dot(normal);
            let distAbs = Math.abs(dist);
            // If the circle is on the outside of the edge, there is no intersection.
            if (dist > 0 && distAbs > radius) {
                // No intersection
                T_VECTORS.push(circlePos);
                T_VECTORS.push(normal);
                T_VECTORS.push(point);
                return false;
            } else if (response) {
                // It intersects, calculate the overlap.
                overlapN = normal;
                overlap = radius - dist;
                // If the center of the circle is on the outside of the edge, or part of the
                // circle is on the outside, the circle is not fully inside the polygon.
                if (dist >= 0 || overlap < 2 * radius) {
                    response.bInA = false;
                }
            }
        }

        // If this is the smallest overlap we've seen, keep it.
        // (overlapN may be null if the circle was in the wrong Voronoi region).
        if (overlapN && response && Math.abs(overlap) < Math.abs(response.overlap)) {
            response.overlap = overlap;
            response.overlapN.copy(overlapN);
        }
    }

    // Calculate the final overlap vector - based on the smallest overlap.
    if (response) {
        response.a = polygon;
        response.b = circle;
        response.overlapV.copy(response.overlapN).scale(response.overlap);
    }
    T_VECTORS.push(circlePos);
    T_VECTORS.push(edge);
    T_VECTORS.push(point);
    return true;
}

// Check if a circle and a polygon collide.
//
// **NOTE:** This is slightly less efficient than polygonCircle as it just
// runs polygonCircle and reverses everything at the end.
/**
 * @param {Circle} circle The circle.
 * @param {Polygon} polygon The polygon.
 * @param {Response=} response Response object (optional) that will be populated if
 *   they interset.
 * @return {boolean} true if they intersect, false if they don't.
 */
export function testCirclePolygon(circle: Circle, polygon: Polygon, response: Response): boolean {
    // Test the polygon against the circle.
    let result = testPolygonCircle(polygon, circle, response);
    if (result && response) {
        // Swap A and B in the response.
        let a = response.a;
        let aInB = response.aInB;
        response.overlapN.reverse();
        response.overlapV.reverse();
        response.a = response.b;
        response.b = a;
        response.aInB = response.bInA;
        response.bInA = aInB;
    }
    return result;
}

// Checks whether polygons collide.
/**
 * @param {Polygon} a The first polygon.
 * @param {Polygon} b The second polygon.
 * @param {Response=} response Response object (optional) that will be populated if
 *   they interset.
 * @return {boolean} true if they intersect, false if they don't.
 */
export function testPolygonPolygon(a: Polygon, b: Polygon, response: Response): boolean {
    let aPoints = a.calcPoints;
    let aLen = aPoints.length;
    let bPoints = b.calcPoints;
    let bLen = bPoints.length;
    // If any of the edge normals of A is a separating axis, no intersection.
    for (let i = 0; i < aLen; i++) {
        if (isSeparatingAxis(a.position, b.position, aPoints, bPoints, a.normals[i], response)) {
            return false;
        }
    }
    // If any of the edge normals of B is a separating axis, no intersection.
    for (let i = 0;i < bLen; i++) {
        if (isSeparatingAxis(a.position, b.position, aPoints, bPoints, b.normals[i], response)) {
            return false;
        }
    }
    // Since none of the edge normals of A or B are a separating axis, there is an intersection
    // and we've already calculated the smallest overlap (in isSeparatingAxis).  Calculate the
    // final overlap vector.
    if (response) {
        response.a = a;
        response.b = b;
        response.overlapV.copy(response.overlapN).scale(response.overlap);
    }
    return true;
}

export function testCollision(colliderA: ICollider, colliderB: ICollider, response: Response): boolean{
    let collided: boolean;
    if (colliderA instanceof Box) {
        colliderA = colliderA.toPolygon()
    }
    if (colliderB instanceof Box) {
        colliderB = colliderB.toPolygon()
    }
    if (colliderA instanceof Circle) {
        if (colliderB instanceof Circle) {
          collided = testCircleCircle(<Circle>colliderA, <Circle>colliderB, this.response);
        } else {
          collided = testCirclePolygon(<Circle>colliderA, <Polygon>colliderB, this.response);
        }
    } else {
        if (colliderB instanceof Circle) {
            collided = testPolygonCircle(<Polygon>colliderA, <Circle>colliderB, this.response);
        } else {
            collided = testPolygonPolygon(<Polygon>colliderA, <Polygon>colliderB, this.response);
        }
    }
    return collided;
}
