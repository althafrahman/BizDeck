
import { API_ENPOINTS } from '@/src/business/constants/apiEndpoints';
import { createServer } from 'miragejs';
import { DASHBOARD_DATA } from './data/dashboard.data';

export function makeServer() {
  return createServer({
    routes() {
        this.urlPrefix = 'http://localhost:3000'; // Use this for testing against a real API
        // this.timing = 1000; // Simulate a delay of 1 second
    //   this.get('/posts', () => {
    //     return {
    //       posts: [
    //         { id: 1, title: 'Hello from Mirage' },
    //         { id: 2, title: 'This is a mocked API' },
    //       ],
    //     };
    //   });

      this.post(API_ENPOINTS.statement, (_, request) => {
        return DASHBOARD_DATA
      });
    },
  });
}
