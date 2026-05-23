// Unit tests for setupJest.js
// These tests verify that the global React setup works correctly

describe('setupJest.js', () => {
  let originalGlobalReact;

  beforeEach(() => {
    // Save the current global React value
    originalGlobalReact = global.React;
  });

  afterEach(() => {
    // Restore the original global React after the test
    global.React = originalGlobalReact;
  });

  test('should ensure React is configured globally', () => {
    // Since Jest likely runs setupJest.js automatically through setupFiles configuration,
    // we need to verify that React is already available globally
    expect(global.React).toBeDefined();
    expect(typeof global.React).toBe('object');

    // Verify some basic React methods/properties exist
    expect(global.React.createElement).toBeDefined();
    expect(typeof global.React.createElement).toBe('function');
    expect(global.React.Component).toBeDefined();
    expect(typeof global.React.Component).toBe('function');
    expect(global.React.version).toBeDefined();
    expect(typeof global.React.version).toBe('string');
  });

  test('should allow React to be used for creating elements', () => {
    // Verify we can use React.createElement after setup
    const element = global.React.createElement('div', { className: 'test' }, 'Hello World');

    // Basic checks to make sure the element was created properly
    expect(element).toBeDefined();
    expect(element.type).toBe('div');
    expect(element.props).toBeDefined();
    expect(element.props.className).toBe('test');
    expect(element.props.children).toBe('Hello World');
  });

  test('should ensure the setupJest.js file defines global React when run directly', () => {
    // We need to check if the setupJest.js file content is correct
    // by reading the file and verifying it contains the expected assignment
    const fs = require('fs');
    const path = require('path');
    const setupJestPath = path.join(__dirname, 'setupJest.js');
    const setupJestContent = fs.readFileSync(setupJestPath, 'utf8');

    // Verify the file contains the necessary code
    expect(setupJestContent).toContain('global.React = require(\'react\');');
    expect(setupJestContent).toContain('react');

    // Verify that the file content is as expected
    const expectedLines = [
      '// Setup file for Jest to ensure React is available globally',
      '// This helps with modules that contain JSX but are not React components',
      '',
      'global.React = require(\'react\');'
    ];

    expectedLines.forEach(line => {
      expect(setupJestContent).toContain(line);
    });
  });
});