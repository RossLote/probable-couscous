import {Vector2} from './math/Vector2';
import {Matrix3} from './math/Matrix3';
import { Entity } from './Entity';

/**
 * This is from https://www.gamedev.net/articles/programming/math-and-physics/making-a-game-engine-transformations-r3566/
 */

function castVector2(vector: Vector2|Array<number>|Float32Array): Vector2 {
	if (vector instanceof Vector2) {
	    return vector
	} else {
	    return new Vector2(vector);
	}
}

export class Transform {
    // the parent transform of this transform
    // if it is null then the parent transform
    // is the world coordinate system
	private _parent: Transform;
    // all of the transforms that have this
    // transform set as their parent
    private _children: Array<Transform>;

    // the position relative to the parent transform
    private localPosition: Vector2 = Vector2.ZERO;
    // rotation relative to the parent
    private localRotation: number = 0.0;
    // scale relative to the parent
    private localScale: Vector2 = Vector2.ONE;

    private pivot: Vector2 = Vector2.ZERO;

    // specifies if the localToWorldTransform
    // needs to be recalulated
    private isDirty:boolean = false;
    // the transform that converts local coordinates
    // to world coordinates
    private localToWorldMatrix: Matrix3 = Matrix3.IDENTITY;

    // specifies if the worldToLocalMatrix
    // needs to be recalculated
    private isInverseDirty: boolean = false;
    // the transform that converts world cooridnates
    // to local coordinates
    private worldToLocalMatrix: Matrix3 = Matrix3.IDENTITY;

    /*
    * Whenever any change happens that changes the localToWorldMatrix
    * this should be called. That way the next time localToWorldMatrix
    * is requested it will be recalculated
    */
    constructor(public entity: Entity) {
        this._children = new Array<Transform>();
    }

    private setDirty(): void{
    	// only update dirty boolean if it isn't already dirty
        if (!this.isDirty) {
     		this.isDirty = true;
            this.isInverseDirty = true;

            // set all children to be dirty since any modification
            // of a parent transform also effects its children's
            // localToWorldTransform
            let children = this._children;
            let i, n;
            for (i = 0, n=children.length; i < n; i++) {
                children[i].setDirty();
            }
        }
    }

    // change the parent transform.
    // setting it to null makes the
    // transform a child of world coordinates
    set parent(value: Transform) {
        // remove this from the previous parent
        if (this._parent) {
            let index = this._parent.children.indexOf(this);
            if (index > -1) {
                this._parent.children.splice(index, 1);
            }
        }

        // assign new parent
        this._parent = value;

        // add this to new parent
        if (this._parent)
        {
            this._parent.children.push(this);
        }

        // changes parents effects
        // the world position
        this.setDirty();
    }

    get parent(): Transform {
    	return this._parent;
    }

    get children():Array<Transform>{
        return this._children;
    }

    destroy(){
        for (let key in this) {
            if (this.hasOwnProperty(key)) {
                delete this[key];
            }
        }
    }

    // calculates the transform matrix that converts
    // from local coordinates to the coordinate space
    // of the parent transform
    calculateLocalToParentMatrix(): Matrix3{
        // Matrix.translate creates a translation matrix
        // that shifts by (localPosition.x, localPosition.y)
        // Matrix.rotate rotates by localRotation radians
        // Matrix.scale scales by a factor of (localScale.x, localScale.y)
        // These are the basic transforms that are described previously
        // in this article
        let t = Matrix3.translate(this.localPosition);
        let r = Matrix3.rotate(this.localRotation);
        let s = Matrix3.scale(this.localScale);
        let p = Matrix3.translate(this.pivot);

        return Matrix3.multiply([t, r, s, p]);
    }

    // gets the matrix that converts from local
    // coordinates to world coordinates
    getWorldTransform(): Matrix3{
        // if the dirty flag is set, the the
        // localToWorldMatrix is out of date
        // and needs to be reclaculated
    	if (this.isDirty) {
            if (!this.parent) {
           		// if the parent is null then the parent is
           		// the world so the localToWorldMatrix
           	 	// is the same as local to parent matrix
                this.localToWorldMatrix = this.calculateLocalToParentMatrix();
            } else {
                // if there is a parent, then the localToWorldMatrix
                // is calcualted recursively using the parent's localToWorldMatrix
                // concatenated with the local to parent matrix
                this.localToWorldMatrix = Matrix3.multiply([this.parent.getWorldTransform(), this.calculateLocalToParentMatrix()]);
            }
            // clear the dirty flag since the
            // matrix is now up to date
            this.isDirty = false;
        }
        return this.localToWorldMatrix;
    }

    getLocalTransform(): Matrix3{
        if (this.isInverseDirty) {
            // the inverse is out of date
            // so it needs to be updated

            // the worldToLocalMatrix is the inverse of
            // the localToWorldMatrix
         	this.worldToLocalMatrix = this.getWorldTransform().inverse();

            // clear the dirty flag since the
            // matrix is now up to date
            this.isInverseDirty = false;
        }

        return this.worldToLocalMatrix;
    }

	getLocalPosition():Vector2{
		return this.localPosition.clone();
	}

	setLocalPosition(vector: Vector2|Array<number>):Transform{
		vector = castVector2(vector);
		if (!vector.equals(this.localPosition)) {
			this.localPosition = vector;
			this.setDirty();
		}
		return this;
	}

	translate(vector: Vector2|Array<number>): Transform {
		vector = castVector2(vector);
		if (!vector.equals(Vector2.ZERO)) {
			// console.log(this.localPosition.data);
			this.localPosition.add(vector);
			// console.log(this.localPosition.data);
			this.setDirty();
		}
		return this;
	}

	getPosition(): Vector2 {
		return this.getWorldTransform().decompose().position;
	}

	getLocalRotation():number{
		return this.localRotation;
	}

	setLocalRotation(rotation: number):Transform{
		if (rotation !== this.localRotation) {
			this.localRotation = rotation;
			this.setDirty();
		}
		return this;
	}

	getRotation(): number {
		return this.getWorldTransform().decompose().rotation;
	}

	getLocalScale():Vector2{
		return this.localScale.clone();
	}

	setLocalScale(vector: Vector2|Array<number>):Transform{
		vector = castVector2(vector);
		if (!vector.equals(this.localPosition)) {
			this.localScale = vector;
			this.setDirty();
		}
		return this;
	}

	getScale(): Vector2 {
		return this.getWorldTransform().decompose().scale;
	}

	getPivot():Vector2{
		return this.pivot.clone().multiply(new Vector2(-1, -1));
	}

	setPivot(vector: Vector2|Array<number>):Transform{
		if (vector.length) {
		    vector = new Vector2(vector);
		}
		vector = <Vector2>vector;
		if (!vector.equals(this.localPosition)) {
			this.pivot = vector.multiply(new Vector2(-1, -1));
			this.setDirty();
		}
		return this;
	}

	fromJSON(json: any){
		if (!json) {
		    return;
		}
		json.localPosition && this.setLocalPosition(json.localPosition);
		json.localRotation && this.setLocalRotation(json.localRotation);
		json.localScale && this.setLocalScale(json.localScale);
		json.pivot && this.setPivot(json.pivot);
	}

	toJSON():any{
		return {
			localPosition: this.getLocalPosition(),
			localRotation: this.getLocalRotation(),
			localScale: this.getLocalScale(),
			pivot: this.getPivot()
		}
	}

}
