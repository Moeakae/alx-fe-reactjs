import React from "react";
import { Routes, Route, Link } from './ProfileDetails';
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSetting';

function Profile() {
    return (
        <div>
            <h1>Profile Page</h1>
            <nav>
                <link to="detail">Profile Details</link> 
                <link to="settings">Profile Settings</link>
            </nav>
            <Routes>
                <Route path="details" element={<ProfileDetails />} />
                <Route path="settings" element={<ProfileSettings />} />
            </Routes>
        </div>
    );
}
export default Profile;