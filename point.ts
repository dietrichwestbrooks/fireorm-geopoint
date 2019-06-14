import { Transform, Type, Expose } from 'class-transformer';
import * as firebase from 'firebase-admin';
import { Collection } from 'fireorm';

// Use this class to fix GeoPoint transform issue
export class Location {
  private _latitude: number;
  private _longitude: number;

  get latitude(): number {
    return this._latitude;
  }

  get longitude(): number {
    return this._longitude;
  }
}

@Collection('points')
export class Point {
  id: string;
  label: string;
  @Type(() => Location)
  @Transform(
    value => new firebase.firestore.GeoPoint(value.latitude, value.longitude),
    { toClassOnly: true })
  location: firebase.firestore.GeoPoint;
}
