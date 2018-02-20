import {Vector2} from '../../math/Vector2';


// ## Circle
//
// Represents a circle with a position and a radius.

// Create a new circle, optionally passing in a position and/or radius. If no position
// is given, the circle will be at `(0,0)`. If no radius is provided, the circle will
// have a radius of `0`.
class Circle {

    /**
     * @param {Vector=} position A vector representing the position of the center of the circle
     * @param {?number=} r The radius of the circle
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
class Polygon {
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
    private recalculate() {
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
    setAngle(angle: number) {
        this.angle = angle;
        this.recalculate();
        return this;
    };

    // Set the current offset to apply to the `points` before applying the `angle` rotation.
    /**
     * @param {Vector} offset The new offset vector.
     * @return {Polygon} This for chaining.
     */
    setOffset(offset: Vector2) {
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
    rotate(angle: number) {
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
     translate(x: number, y: number) {
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
    getAABB() {
        let points = this.calcPoints;
        let len = points.length;
        let xMin = points[0].x;
        let yMin = points[0].y;
        let xMax = points[0].x;
        let yMax = points[0].y;
        for (let i = 1; i < len; i++) {
            var point = points[i];
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
    getCentroid() {
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
class Box {
    /**
     * @param {Vector=} pos A vector representing the bottom-left of the box (i.e. the smallest x and smallest y value).
     * @param {?number=} w The width of the box.
     * @param {?number=} h The height of the box.
     * @constructor
     */
    constructor(public position: Vector2 = Vector2.ZERO, public width: number = 0, public height: number = 0) {}
    // Returns a polygon whose edges are the same as this box.
    /**
     * @return {Polygon} A new Polygon that represents this box.
     */
    toPolygon() {
        let pos = this.position;
        let w = this.width;
        let h = this.height;
        return new Polygon(new Vector2(pos.x, pos.y), [
            new Vector2(), new Vector2(w, 0),
            new Vector2(w,h), new Vector2(0,h)
        ]);
    };
}
