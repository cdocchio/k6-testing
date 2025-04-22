import { check } from 'k6';
import http from 'k6/http';

export const options = {
    vus: 10, // Number of virtual users
    duration: '30s', // Test duration
    thresholds: {
        http_req_duration: ['p(95)<500'], // 95% of requests should complete below 500ms
    },
};

export default function () {
    const res = http.get('https://test.k6.io');
    check(res, {
        'status is 200': (r) => r.status === 200,
    });
}