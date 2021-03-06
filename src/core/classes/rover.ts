import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class Rover
{
  private _currentOrientation: string = "";
  private _currentX: number = 0;
  private _currentY: number = 0;
  private _startOrientation: string = "";
  private _startX: number = 0;
  private _startY: number = 0;
  private _maxX: number = 0;
  private _maxY: number = 0;

  get maxX(): number
  {
    return this._maxX;
  }

  set maxX(x: number)
  {
    this._maxX = x;
  }

  get maxY(): number
  {
    return this._maxY;
  }

  set maxY(y: number)
  {
    this._maxY = y;
  }

  get startX(): number
  {
    return this._startX;
  }

  get startY(): number
  {
    return this._startY;
  }

  set startX(x: number)
  {
    this._startX = x;
    this._currentX = x;
  }

  set startY(y: number)
  {
    this._startY = y;
    this._currentY = y;
  }

  get currentX(): number
  {
    return this._currentX;
  }

  set currentX(x: number)
  {
    this._currentX = x;
  }

  get currentY(): number
  {
    return this._currentY;
  }

  set currentY(y: number)
  {
    this._currentY = y;
  }

  get startOrientation(): string
  {
    return this._startOrientation;
  }

  set startOrientation(orientation: string)
  {
    this._startOrientation = orientation[0].toUpperCase();
    this.currentOrientation = this._startOrientation;
  }

  set currentOrientation(orientation: string)
  {
    this._currentOrientation = orientation[0].toUpperCase();
  }

  get currentOrientation(): string
  {
    return this._currentOrientation;
  }

  moveNorth(): boolean
  {
    if (this.currentY < this.maxY)
    {
      this.currentY++;
      return true
    } else
    {
      return false
    }
  }

  moveWest(): boolean
  {
    if (this.currentX > 0)
    {
      this.currentX--;
      return true
    } else
    {
      return false
    }
  }

  moveEst(): boolean
  {
    if (this.currentX < this.maxY)
    {
      this.currentX++;
      return true
    } else
    {
      return false
    }
  }

  moveSouth(): boolean
  {
    if (this.currentY > 0)
    {
      this.currentY++;
      return true
    } else
    {
      return false
    }
  }

  move(order: string): boolean
  {
    let result: boolean = false;
    if (this.currentOrientation == order)
    {
      switch (order.toUpperCase())
      {
        case 'N':
          result = this.moveNorth();
          break;
        case 'W':
          result = this.moveWest();
          break;
        case 'E':
          result = this.moveEst();
          break;
        case 'S':
          result = this.moveSouth();
          break;
      }
    } else
    {
      this._currentOrientation = order
      result = true
    }
    return result;
  }
}
