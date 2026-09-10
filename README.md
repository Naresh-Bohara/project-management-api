# Project Management API

A simple backend API built with **NestJS, TypeScript, MongoDB, and Mongoose**.

## Tech Stack

* NestJS
* TypeScript
* MongoDB
* Mongoose
* Class Validator

## Features

* Developer management
* Project management
* Assign developers to projects
* Many-to-many relationship between developers and projects
* Project member roles and allocation
* DTO validation
* MongoDB references and population
* Unique developer-project relationship

## Project Structure

```text
src/
├── developer/
├── project/
├── project-member/
├── app.module.ts
└── main.ts
```

## Installation

```bash
npm install
```

## Environment Variables

Create a `.env` file:

```env
MONGODB_URL=your_mongodb_connection_string
```

## Run the Project

```bash
npm run start:dev
```

The API will run on:

```text
http://localhost:3000
```

## Purpose

This project is created for learning and practicing **NestJS, MongoDB relationships, Mongoose, DTO validation, and backend architecture**.
