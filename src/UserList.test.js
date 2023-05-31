import { screen, render, within } from "@testing-library/react";
import UserList from "./UserList";

describe("testing user list", () => {
  const users = [
    { name: "John", email: "john@example.com" },
    // ... other user objects
  ];
  test("should render user list", () => {
    render(<UserList users={users} />);
    const userRows = screen.getAllByTestId("user-row");
    expect(userRows).toHaveLength(users.length);
  });
  test("should render table rows for each users", () => {
    render(<UserList users={users} />);

    const userRows = screen.getAllByTestId("user-row");
    userRows.forEach((row, index) => {
      const nameCell = within(row).getByText(users[index].name);
      const emailCell = within(row).getByText(users[index].email);

      expect(nameCell).toBeInTheDocument();
      expect(emailCell).toBeInTheDocument();
    });
  });
});
