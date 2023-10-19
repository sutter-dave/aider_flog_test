# High-Level Design Documents

The purpose of the high-level design document is to plan and communicate the software design to facilitate its implementation with the aid of an AI assistant. Given the context length limitations for the AI assistant, the document should remain concise.

For each code file, there should be a corresponding high-level design document (often referred to simply as a "design document"). The design document will have the same name as the code file, but with the ".md" extension for markdown. In addition to these, we will have a primary high-level design document named after the application and a design document titled "ProjectSetup.md" or something similar.

These design documents will be synchronized with their corresponding code files throughout the application's lifecycle.

## Contents 

### Main Design Document

This document offers an overarching description of the application. It should also reference the project setup file and top-tier code design files.

### Project Setup Document

This document details the project's setup, providing sufficient information to build the project. It should also guide the code implementer on any frameworks and conventions to be adhered to.

### Design Document for Code Files

Each high-level design document should typically specify:
 
- Component name
- Purpose

Depending on the file type, we'll also include: 

- For `types`: Specify the fields.
- For `functions`: Specify inputs, outputs (including side effects), and high-level workflow.
- For `class`: List states and public functions.
- For `UI elements`: Define inputs, behaviors, and interactions.

Lastly, dependencies should be listed at the file level.

## Best Practices

For effective software writing, it's crucial to limit our code's scope (and by extension, our design) to ensure comprehensibility. Organizing the code to minimize dependencies between files will further this goal. Adhering to these practices is especially important in our scenario to ensure smooth application implementation, considering the AI assistant's context length constraints.