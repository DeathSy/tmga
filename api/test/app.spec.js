/* global describe it expect, beforeEach */
import request from 'supertest'
import mockingoose from 'mockingoose'
import app from '../app'
import Student from '../models/student'
import { findAll } from '../models/__mocks__/student'

describe('Test the root path', () => {
  let students
  beforeEach(() => {
    students = findAll()
    mockingoose.Students.toReturn(students)
  })

  it('should get all student correctly', async () => {
    const result = await Student.find()
    expect(JSON.parse(JSON.stringify(result))).toMatchObject(students)
  })

  it('should receive respose 200 status code', async () => {
    const response = await request(app).get('/api/v1/students')
    expect(response.statusCode).toBe(200)
  })
})
