import request from 'supertest';
import app from '../index';
import sequelize from '../config/datebaseConfig';

beforeAll(async () => {
  await sequelize.sync({ force: true });
});

afterAll(async () => {
  await sequelize.close();
});

describe('Employee API', () => {
  it('should create a new employee profile', async () => {
    const response = await request(app)
      .post('/api/createOrUpdateProfile')
      .send({
        employeeNumber: 1,
        firstName: 'John',
        lastName: 'Doe',
        salutation: 'Mr.',
        gender: 'Male',
        grossSalary: 50000,
        profileColour: 'blue'
      });
    expect(response.status).toBe(201);
    expect(response.body.message).toBe('Profile created successfully');
  });

  it('should get all employee profiles', async () => {
    const response = await request(app).get('/api/getEmployeeProfile');
    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(1);
  });

  it('should update an existing employee profile', async () => {
    const response = await request(app)
      .post('/api/createOrUpdateProfile')
      .send({
        employeeNumber: 1,
        firstName: 'Jane',
        lastName: 'Doe',
        salutation: 'Ms.',
        gender: 'Female',
        grossSalary: 55000,
        profileColour: 'red'
      });
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Profile updated successfully');
  });
});
