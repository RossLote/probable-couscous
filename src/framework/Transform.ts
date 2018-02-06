import {Vector2} from '../math/Vector2';
import {Matrix3} from '../math/Matrix3';

/**
 * This is from https://www.gamedev.net/articles/programming/math-and-physics/making-a-game-engine-transformations-r3566/
 */

export class Transform {
    // the parent transform of this transform
    // if it is null then the parent transform
    // is the world coordinate system
	private _parent: Transform;
    // all of the transforms that have this
    // transform set as their parent
    children: Array<Transform>;

    // the position relative to the parent transform
    private _localPosition: Vector2 = Vector2.ZERO;
    // rotation relative to the parent
    private _localRotation: number = 0.0;
    // scale relative to the parent
    private _localScale: Vector2 = Vector2.ONE;

    private _pivot: Vector2 = Vector2.ZERO;

    // specifies if the localToWorldTransform
    // needs to be recalulated
    private isDirty:boolean = false;
    // the transform that converts local coordinates
    // to world coordinates
    private _localToWorldMatrix: Matrix3 = Matrix3.IDENTITY;

    // specifies if the worldToLocalMatrix
    // needs to be recalculated
    private isInverseDirty: boolean = false;
    // the transform that converts world cooridnates
    // to local coordinates
    private _worldToLocalMatrix: Matrix3 = Matrix3.IDENTITY;

    /*
     * Whenever any change happens that changes the localToWorldMatrix
     * this should be called. That way the next time localToWorldMatrix
     * is requested it will be recalculated
     */
     constructor() {
         this.children = new Array<Transform>();
     }

    private setDirty = (): void => {
    	// only update dirty boolean if it isn't already dirty
        if (!this.isDirty) {
     		this.isDirty = true;
            this.isInverseDirty = true;

            // set all children to be dirty since any modification
            // of a parent transform also effects its children's
            // localToWorldTransform
            let children = this.children;
            for (let i = 0, n=children.length; i < n; i++) {
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

    // calculates the transform matrix that converts
    // from local coordinates to the coordinate space
    // of the parent transform
    calculateLocalToParentMatrix = (): Matrix3 => {
        // Matrix.translate creates a translation matrix
        // that shifts by (localPosition.x, localPosition.y)
        // Matrix.rotate rotates by localRotation radians
        // Matrix.scale scales by a factor of (localScale.x, localScale.y)
        // These are the basic transforms that are described previously
        // in this article
        let t = Matrix3.translate(this.localPosition);
        let r = Matrix3.rotate(this.localRotation);
        let s = Matrix3.scale(this.localScale);

        return Matrix3.multiply([t, r, s]);
    }

    // gets the matrix that converts from local
    // coordinates to world coordinates
    get localToWorldMatrix(): Matrix3 {
        // if the dirty flag is set, the the
        // localToWorldMatrix is out of date
        // and needs to be reclaculated
    	if (this.isDirty) {
            if (!this.parent) {
           		// if the parent is null then the parent is
           		// the world so the localToWorldMatrix
           	 	// is the same as local to parent matrix
                this._localToWorldMatrix = this.calculateLocalToParentMatrix();
            } else {
                // if there is a parent, then the localToWorldMatrix
                // is calcualted recursively using the parent's localToWorldMatrix
                // concatenated with the local to parent matrix
                this._localToWorldMatrix = Matrix3.multiply([this.parent.localToWorldMatrix, this.calculateLocalToParentMatrix()]);
            }

            // clear the dirty flag since the
            // matrix is now up to date
            this.isDirty = false;
        }
        return this._localToWorldMatrix;
    }

    get worldToLocalMatrix(): Matrix3 {
        if (this.isInverseDirty) {
            // the inverse is out of date
            // so it needs to be updated

            // the worldToLocalMatrix is the inverse of
            // the localToWorldMatrix
         	this._worldToLocalMatrix = this.localToWorldMatrix.inverse();

            // clear the dirty flag since the
            // matrix is now up to date
            this.isInverseDirty = false;
        }

        return this._worldToLocalMatrix;
    }

    public get localPosition():any {
    	return this._localPosition.clone();
    }

    // sets the position relative to the parent
    // and marks the transform as dirty
    public set localPosition(value: any){
        if (value.length === 2) {
            this._localPosition.set(value[0], value[1]);
        } else if (value instanceof Vector2) {
            this._localPosition = value;
        }
        this.setDirty();
    }

    public get localRotation():number {
    	return this._localRotation;
    }

    // sets the rotation relative to the parent
    // and marks the transform as dirty
    public set localRotation(value: number) {
        this._localRotation = value;
        // set the dirty flag since the localToWorldMatrix needs to be updated
        this.setDirty();
    }

    public get localScale():any {
    	return this._localScale;
    }

    // sets the scale relative to the parent
    // and marks the transform as dirty
    public set localScale(value: any) {
        if (value.length === 2) {
            this._localScale.set(value[0], value[1]);
        } else if (value instanceof Vector2) {
            this._localScale = value;
        }
        this.setDirty();
    }

    public get pivot():any {
    	return this._pivot;
    }

    // sets the scale relative to the parent
    // and marks the transform as dirty
    public set pivot(value: any) {
        if (value.length === 2) {
            this._pivot.set(value[0], value[1]);
        } else if (value instanceof Vector2) {
            this._pivot = value;
        }
        this.setDirty();
    }
}
