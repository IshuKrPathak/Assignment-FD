// Define user login data structure
interface UserLoginData {
    userId: string;
    logged_in: Date;
    logged_out: Date;
    lastSeenAt: Date;
}

// Sample user login data
const userLoginData: UserLoginData[] = [
    { userId: "user1", logged_in: new Date("2024-02-10"), logged_out: new Date("2024-02-10"), lastSeenAt: new Date("2024-02-10") },
    { userId: "user2", logged_in: new Date("2024-02-15"), logged_out: new Date("2024-02-15"), lastSeenAt: new Date("2024-03-20") },
    { userId: "user3", logged_in: new Date("2024-03-05"), logged_out: new Date("2024-03-05"), lastSeenAt: new Date("2024-03-25") },
    // Add more user login data as needed
];

// Function to determine monthly logged-in users
function calculateMonthlyLoggedInUsers(loginData: UserLoginData[], year: number, month: number): string[] {
    const loggedInUsers: string[] = [];
    loginData.forEach((entry) => {
        if (entry.logged_in.getFullYear() === year && entry.logged_in.getMonth() === month) {
            if (!loggedInUsers.includes(entry.userId)) {
                loggedInUsers.push(entry.userId);
            }
        }
    });
    return loggedInUsers;
}

// Function to determine active users within a month
function calculateActiveUsers(loginData: UserLoginData[], year: number, month: number): string[] {
    const activeUsers: string[] = [];
    loginData.forEach((entry) => {
        if ((entry.logged_in.getFullYear() === year && entry.logged_in.getMonth() === month) || 
            (entry.lastSeenAt.getFullYear() === year && entry.lastSeenAt.getMonth() === month)) {
            if (!activeUsers.includes(entry.userId)) {
                activeUsers.push(entry.userId);
            }
        }
    });
    return activeUsers;
}

// Usage
const year = 2024;
const month = 2; // Example: March
const monthlyLoggedInUsers = calculateMonthlyLoggedInUsers(userLoginData, year, month);
const activeUsers = calculateActiveUsers(userLoginData, year, month);

console.log("Monthly Logged-In Users:", monthlyLoggedInUsers);
console.log("Active Users:", activeUsers);