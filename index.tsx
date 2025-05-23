
import { makeServer } from './mocks/mirage-server';


var server: ReturnType<typeof makeServer> | null = null;

if(!server){
  server = makeServer()
}

import 'expo-router/entry';

