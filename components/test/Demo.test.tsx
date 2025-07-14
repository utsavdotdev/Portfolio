import { diff } from "jest-diff";
import { parseWithComments } from "jest-docblock";
import { getType } from "@jest/get-type";
// import CopyEmail from "../CopyEmail";

// describe("Different Matchers",()=> {
//   test("two plus two", () => {
//     const value = 2 + 2;
//     expect(value).toBeGreaterThan(3);
//     expect(value).toBeGreaterThanOrEqual(3.5);
//     expect(value).toBeLessThan(5);
//     expect(value).toBeLessThanOrEqual(4.5);
//     expect(value).toBe(4);
//     expect(value).toEqual(4);
//   });

//   test("adding floating point numbers", () => {
//     const value = 0.1 + 0.2;
//     expect(value).toBeCloseTo(0.3);
//   });

//   test("there is no I in team", () => {
//     expect("team").not.toMatch(/I/);
//   });

//   test('but there is a "stop" in Christoph', () => {
//     expect("Christoph").toMatch(/stop/);
//   });

//   const shoppingList = [
//     "trash bags",
//     "paper towels",
//     "milk",
//   ];

//   test("the shopping list has milk on it", () => {
//     expect(shoppingList).toContain("milk");
//     expect(new Set(shoppingList)).toContain("milk");
//   });
// })

// beforeAll(() => console.log('1 - beforeAll'));
// afterAll(() => console.log('1 - afterAll'));
// beforeEach(() => console.log('1 - beforeEach'));
// afterEach(() => console.log('1 - afterEach'));

// test('', () => console.log('1 - test'));

// describe('Scoped / Nested block', () => {
//   beforeAll(() => console.log('2 - beforeAll'));
//   afterAll(() => console.log('2 - afterAll'));
//   beforeEach(() => console.log('2 - beforeEach'));
//   afterEach(() => console.log('2 - afterEach'));

//   test('', () => console.log('2 - test'));
// });

// describe("Mock Functions in Jest", () => {

//   test("basic mock function", () => {
//     const mockFn = jest.fn();

//     mockFn("arg1", "arg2");
//     mockFn("arg3");

//     expect(mockFn).toHaveBeenCalled();
//     expect(mockFn).toHaveBeenCalledTimes(2);
//     expect(mockFn).toHaveBeenCalledWith("arg1", "arg2");
//     expect(mockFn).toHaveBeenLastCalledWith("arg3");
//   });

//   test("mock function with return values", () => {
//     const mockFn = jest.fn();

//     mockFn.mockReturnValue("mocked value");
//     mockFn.mockReturnValueOnce("first call");

//     expect(mockFn()).toBe("first call");
//     expect(mockFn()).toBe("mocked value");
//     expect(mockFn()).toBe("mocked value");
//   });

//   test("mock function with implementation", () => {
//     const mockFn = jest.fn((x, y) => x + y);

//     expect(mockFn(2, 3)).toBe(5);
//     expect(mockFn).toHaveBeenCalledWith(2, 3);
//   });

//   test("mock async functions", async () => {
//     const mockAsyncFn = jest.fn();

//     mockAsyncFn.mockResolvedValue("resolved value");
//     mockAsyncFn.mockRejectedValueOnce(new Error("error"));

//     await expect(mockAsyncFn()).rejects.toThrow("error");
//     await expect(mockAsyncFn()).resolves.toBe("resolved value");
//   });

//   test("different implementations for different calls", () => {
//     const mockFn = jest.fn();

//     mockFn
//       .mockImplementationOnce((x) => x * 2)
//       .mockImplementationOnce((x) => x * 3)
//       .mockImplementation((x) => x * 4);

//     expect(mockFn(5)).toBe(10); // 5 * 2
//     expect(mockFn(5)).toBe(15); // 5 * 3
//     expect(mockFn(5)).toBe(20); // 5 * 4
//     expect(mockFn(5)).toBe(20); // 5 * 4 (default implementation)
//   });

//   test("testing calls with objects and arrays", () => {
//     const mockFn = jest.fn();

//     const user = { name: "John", age: 30 };
//     const numbers = [1, 2, 3];

//     mockFn(user, numbers);

//     expect(mockFn).toHaveBeenCalledWith(
//       expect.objectContaining({ name: "John" }),
//       expect.arrayContaining([1, 2])
//     );
//   });

// });

// describe("Mocking API Responses", () => {

//   test("should mock fetch API response", async () => {
//     const mockUser = { id: 1, name: "John Doe", email: "john@example.com" };

//     global.fetch = jest.fn(() =>
//       Promise.resolve({
//         ok: true,
//         status: 200,
//         json: () => Promise.resolve(mockUser),
//       })
//     );

//     const fetchUser = async (id) => {
//       const response = await fetch(`/api/users/${id}`);
//       return response.json();
//     };

//     const userData = await fetchUser(1);

//     expect(fetch).toHaveBeenCalledWith("/api/users/1");
//     expect(userData).toEqual(mockUser);

//     // Clean up
//     global.fetch.mockRestore();
//   });

//   test("should handle API error responses", async () => {
//     global.fetch = jest.fn(() =>
//       Promise.resolve({
//         ok: false,
//         status: 404,
//         json: () => Promise.resolve({ message: "User not found" }),
//       })
//     );

//     const fetchUser = async (id) => {
//       const response = await fetch(`/api/users/${id}`);
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       return response.json();
//     };

//     await expect(fetchUser(999)).rejects.toThrow("HTTP error! status: 404");

//     global.fetch.mockRestore();
//   });

//   test("should mock multiple different API endpoints", async () => {
//     const mockUser = { id: 1, name: "John" };
//     const mockPosts = [{ id: 1, title: "Post 1" }, { id: 2, title: "Post 2" }];

//     global.fetch = jest.fn()
//       .mockImplementationOnce(() =>
//         Promise.resolve({
//           ok: true,
//           json: () => Promise.resolve(mockUser),
//         })
//       )
//       .mockImplementationOnce(() =>
//         Promise.resolve({
//           ok: true,
//           json: () => Promise.resolve(mockPosts),
//         })
//       );

//     const fetchUserAndPosts = async (userId) => {
//       const userResponse = await fetch(`/api/users/${userId}`);
//       const postsResponse = await fetch(`/api/users/${userId}/posts`);

//       const user = await userResponse.json();
//       const posts = await postsResponse.json();

//       return { user, posts };
//     };

//     const result = await fetchUserAndPosts(1);

//     expect(fetch).toHaveBeenCalledTimes(2);
//     expect(fetch).toHaveBeenNthCalledWith(1, "/api/users/1");
//     expect(fetch).toHaveBeenNthCalledWith(2, "/api/users/1/posts");
//     expect(result.user).toEqual(mockUser);
//     expect(result.posts).toEqual(mockPosts);

//     global.fetch.mockRestore();
//   });

//   test("should mock POST API request", async () => {
//     const newUser = { name: "Jane Doe", email: "jane@example.com" };
//     const createdUser = { id: 2, ...newUser };

//     global.fetch = jest.fn(() =>
//       Promise.resolve({
//         ok: true,
//         status: 201,
//         json: () => Promise.resolve(createdUser),
//       })
//     );

//     const createUser = async (userData) => {
//       const response = await fetch("/api/users", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(userData),
//       });
//       return response.json();
//     };

//     const result = await createUser(newUser);

//     expect(fetch).toHaveBeenCalledWith("/api/users", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(newUser),
//     });
//     expect(result).toEqual(createdUser);

//     global.fetch.mockRestore();
//   });

//   test("should mock authenticated API requests", async () => {
//     const mockData = { message: "Authenticated data" };
//     const token = "mock-jwt-token";

//     global.fetch = jest.fn(() =>
//       Promise.resolve({
//         ok: true,
//         json: () => Promise.resolve(mockData),
//       })
//     );

//     const fetchProtectedData = async (authToken) => {
//       const response = await fetch("/api/protected", {
//         headers: {
//           "Authorization": `Bearer ${authToken}`,
//           "Content-Type": "application/json",
//         },
//       });
//       return response.json();
//     };

//     const result = await fetchProtectedData(token);

//     expect(fetch).toHaveBeenCalledWith("/api/protected", {
//       headers: {
//         "Authorization": `Bearer ${token}`,
//         "Content-Type": "application/json",
//       },
//     });
//     expect(result).toEqual(mockData);

//     global.fetch.mockRestore();
//   });

// });

describe("Jest Platform Features", () => {
  describe("Environment Variables", () => {
    const originalEnv = process.env;

    beforeEach(() => {
      jest.resetModules();
      process.env = { ...originalEnv };
    });

    afterEach(() => {
      process.env = originalEnv;
    });

    test("should work with environment variables", () => {
      process.env.NODE_ENV = "test";
      process.env.API_URL = "https://test-api.com";

      const getApiUrl = () => process.env.API_URL;
      const isDevelopment = () => process.env.NODE_ENV === "development";

      expect(getApiUrl()).toBe("https://test-api.com");
      expect(isDevelopment()).toBe(false);
    });

    test("should handle missing environment variables", () => {
      delete process.env.API_URL;

      const getApiUrl = () => process.env.API_URL || "http://localhost:3000";

      expect(getApiUrl()).toBe("http://localhost:3000");
    });
  });

  describe("Jest Diff", () => {
    test("should show differences between two strings", () => {
      const received = "Hello, world!";
      const expected = "Hello, Jest!";

      const result = diff(expected, received);

      expect(result).toMatchSnapshot();
    });

    test("should show differences in objects", () => {
      const received = { name: "Alice", age: 30 };
      const expected = { name: "Alice", age: 31 };

      const result = diff(expected, received);

      expect(result).toMatchSnapshot();
    });
  });

  describe("Jest Docblock", () => {
    test("should parse docblock comments", () => {
      const docblock = `
        /**
         * This is a sample function.
         * @param {string} name - The name of the person.
         * @returns {string} Greeting message.
         */
      `;

      const parsed = parseWithComments(docblock);
      expect(parsed.pragmas).toHaveProperty("param");
      expect(parsed.pragmas).toHaveProperty("returns");
      expect(parsed.comments).toContain("sample function");
    });
  });

  describe("Jest Get Type", () => {
    test("should return the type of a variable", () => {
      const str = "Hello, Jest!";
      const num = 42;
      const arr = [1, 2, 3];
      const obj = { key: "value" };

      expect(getType(str)).toBe("string");
      expect(getType(num)).toBe("number");
      expect(getType(arr)).toBe("array");
      expect(getType(obj)).toBe("object");
    });
  });
});

