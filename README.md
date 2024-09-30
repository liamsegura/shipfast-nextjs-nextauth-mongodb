Very basic setup, Google login, user is saved to mongodb, sign out. 

This is a [Next.js](https://nextjs.org/) application using the App Router. It integrates [NextAuth.js](https://next-auth.js.org/) for authentication with Google OAuth, MongoDB as the database and Tailwind for styling.

## Getting Started

### Prerequisites

- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/liamsegura/nextjs-nextauth-mongodb.git
   cd nextjs-nextauth-mongodb
   ```

2. Install the dependencies:

   ```
   npm install
   # or
   yarn install
   ```

3. create a `.env.local` file in the root directory and add the following environments variables:

   ```
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET={NEXTAUTH_SECRET}
   GOOGLE_CLIENT_ID={GOOGLE_CLIENT_ID}
   GOOGLE_CLIENT_SECRET={GOOGLE_CLIENT_SECRET}
   MONGODB_URI={MONGODB_URI}
   ```

### Setting Up Google Client

   Go to the Google Cloud Console.<br>
   Create a new project or select an existing project.<br>
   Navigate to the Credentials page.<br>
   Click Create Credentials and select OAuth 2.0 Client IDs.<br>
   Configure the OAuth consent screen.<br>
   Set the application type to Web application.<br>
   Add http://localhost:3000 to the Authorized JavaScript origins.<br>
   Add http://localhost:3000/api/auth/callback/google to the Authorized redirect URIs.<br>
   Click Create and copy the Client ID and Client Secret to your .env.local file.<br>

### Setting Up MongoDB URI

   Go to MongoDB Atlas.<br>
   Create a new cluster or use an existing cluster.<br>
   Click Connect and follow the instructions to allow your IP address and create a database user.<br>
   Copy the connection string and replace <username>, <password>, and <dbname> with your MongoDB credentials and database name.<br>
   Add the connection string to your .env.local file as MONGODB_URI.<br>
