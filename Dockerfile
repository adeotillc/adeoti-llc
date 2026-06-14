# Upgrade to Node.js 22 to support the latest Vite build tools
FROM node:22-alpine

# Set the working directory inside the container
WORKDIR /app

# --- Step 1: Build the Frontend ---
# Copy frontend package.json and install dependencies
COPY frontend/package*.json ./frontend/
RUN cd frontend && npm install

# Copy the rest of the frontend code and build it
COPY frontend/ ./frontend/
RUN cd frontend && npm run build

# --- Step 2: Setup the Backend (API) ---
# Copy API package.json and install dependencies
COPY api/package*.json ./api/
RUN cd api && npm install

# Copy the rest of the API code
COPY api/ ./api/

# --- Step 3: Run the Application ---
# Expose the port your Express server runs on
EXPOSE 5000
ENV PORT=5000

# Start the Node.js server using your actual entry point
CMD ["node", "api/index.js"]