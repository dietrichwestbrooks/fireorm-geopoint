import * as firebase from 'firebase-admin';
import { Collection } from 'fireorm';

@Collection('points')
export class Point {
    id: string;
    label: string;
    location: firebase.firestore.GeoPoint;
}
