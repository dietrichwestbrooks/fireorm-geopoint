import * as admin from 'firebase-admin';
import * as fireorm from 'fireorm';
import { GetRepository } from 'fireorm';
import { Point } from './point';

import serviceAccount from './serviceAccountKey.json';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://fireorm-geopoint.firebaseio.com'
});

export const db = admin.firestore();

const settings = { timestampsInSnapshots: true };
db.settings(settings);

fireorm.Initialize(db);

const repository = GetRepository(Point);

repository
  .find()
  .then(points => console.log('results', points))
  .catch(err => console.log(err));
