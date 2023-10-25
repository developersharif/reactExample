import AppLayout from "./layout/AppLayout";
function Home() {
  return (
    <>
      <AppLayout title="Home Page">
        <h2>Home Page</h2>
        <p>
        Explore the world of React with our beginner-friendly example project! This hands-on demonstration incorporates essential React concepts like useState, useEffect, memoization (using React.memo), and state management via Context API. Navigating through the application is made easy with React Router DOM, complete with routes, route parameters, and redirects. Plus, we've added a slick loader to give your project a polished finishing touch. Whether you're new to React or looking to reinforce your skills, our project is the perfect guide to get you started on your React journey.
        </p>
      </AppLayout>
    </>
  );
}

export default Home;
