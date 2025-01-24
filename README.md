# LeadManagementApp - HSR Motors Lead Management System

## Overview
Lead Management Web-Application is a modern web application designed for HSR Motors to streamline their lead management process. The system helps sales teams and business managers collaborate effectively while managing and analyzing leads from various sources including Facebook, Twitter, Google, and offline events.

## Key Features
- Real-time lead tracking and management
- Collaborative workspace for sales team
- Advanced analytics dashboard for business managers
- Lead status tracking and qualification
- Automated lead assignment and follow-up system

## Screens
1. **Lead Listing**: Comprehensive view of all leads with filtering and sorting capabilities
2. **Lead Details**: Detailed information about individual leads with communication history
3. **Lead Management**: Tools for updating lead status and assigning team members
4. **Dashboard**: Analytics and performance metrics visualization

## Tech Stack
- Frontend: React.js with TypeScript
- UI Framework: Tailwind CSS
- State Management: Redux Toolkit
- Charts: Recharts
- Forms: React Hook Form
- API Client: Axios
- Testing: Jest & React Testing Library

## Reference Screenshots of the Web-Application 
![Screenshot (765)](https://github.com/user-attachments/assets/5df13255-216b-403b-a725-49a68b1f7677)

![Screenshot (766)](https://github.com/user-attachments/assets/9776f4bd-2acc-4529-880e-a1183569637c)

![Screenshot (767)](https://github.com/user-attachments/assets/1aac0775-3af5-412a-97a7-49c5487e8f06)

![Screenshot (768)](https://github.com/user-attachments/assets/c0afb989-18e0-4f8a-8043-bf1fedc19d66)

![Screenshot (769)](https://github.com/user-attachments/assets/3263b4f1-4995-4014-bcf8-fcdc652953a9)


## Installation
```bash
# Clone the repository
git clone https://github.com/mrigankraj/leadsync-pro.git

# Navigate to project directory
cd leadsync-pro

# Install dependencies
npm install

# Start development server
npm run dev
```

## Environment Setup
Create a `.env` file in the root directory with the following variables:
```
VITE_API_BASE_URL=your_api_url
VITE_APP_ENV=development
```

## Scripts
- `npm run dev`: Start development server
- `npm run build`: Build production bundle
- `npm run test`: Run tests
- `npm run lint`: Run ESLint
- `npm run format`: Format code with Prettier

## Project Structure
```
leadsync-pro/
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── store/
│   ├── types/
│   ├── utils/
│   └── App.tsx
├── public/
├── tests/
└── package.json
```

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
MIT License
