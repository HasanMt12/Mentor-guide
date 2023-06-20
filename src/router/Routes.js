import { createBrowserRouter } from "react-router-dom";
import Main from '../Layout/Main'
import HomePage from "../pages/HomePage/HomePage";
import MentorsDetails from "../pages/MentorsDetails/MentorsDetails";
import Login from "../shared/Login/Login/Login";
import Signup from "../shared/Login/SignUp/Signup";
import DashboardLayout from "../Layout/DashboardLayout";
import PrivateRouts from "./PrivateRoute/PrivateRoute";
import Users from "../pages/Dashboard/All users/Users";
import AdminRoute from "./AdminRoute/AdminRoute";

import SamplePage from "../pages/HomePage/SamplePage";
import BlogPage from "../pages/blog/BlogPage";

import SignupMentor from "../shared/Login/SignUp/SignupMentor";

import BlogSection from "../pages/HomePage/BlogSection";
import BlogPost from "../pages/Dashboard/adminBlogPost/BlogPost";
import BlogAction from "../pages/Dashboard/adminBlogPost/BlogAction";
import UserDashboard from "../pages/Dashboard/All users/UserDashboard";
import DashboardInitial from "../shared/Dashboard/DashboardInitial";
import Courses from "../shared/Dashboard/Courses";
import Training from "../shared/Dashboard/Training";
import Form from "../pages/HomePage/Form";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        // errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <HomePage></HomePage>
            },
            {
                path: '/mentors',
                element: <MentorsDetails></MentorsDetails>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },

            {
                path: '/upComing',
                element: <SamplePage></SamplePage>
            },

             {
                path: '/signupMentor',
                element: <SignupMentor></SignupMentor>
            },
            {
                path: '/users/:id',
                element: <MentorsDetails></MentorsDetails>,
                loader: ({params}) => fetch(`https://product-sell-server.vercel.app/users/${params.id}`)
            },
            {
                path: '/blog',
                element: <BlogPage></BlogPage>
            },
            {
                path: '/blogSection',
                element: <BlogSection></BlogSection>
            },
            {
                path: '/courses',
                element: <Courses></Courses>
            },
            {
                path: '/training',
                element: <Form></Form>
            },


        ]
    },
    {
        path: '/dashboard',
        element:<PrivateRouts>
            <DashboardLayout></DashboardLayout>
        </PrivateRouts>  ,
        children:[
              {
                path: '/dashboard',
                element: <DashboardInitial></DashboardInitial>
            },
           
             {
                path: '/dashboard/users',
                element:<AdminRoute><Users></Users></AdminRoute> 
            },
             {
                path: '/dashboard/blogPost',
                element:<AdminRoute><BlogPost></BlogPost></AdminRoute> 
            },
                         {
                path: '/dashboard/blogAction',
                element:<AdminRoute><BlogAction></BlogAction></AdminRoute> 
            },
                    {
                path: '/dashboard/userDashboard',
                element:<UserDashboard></UserDashboard>
            }
        ]
    }
])

export default router;