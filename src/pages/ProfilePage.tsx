import useAuth from "../hooks/useAuth";

const ProfilePage = () => {
    const { user } = useAuth();
    return (
        <h1> este es el perfil de { user.name  }</h1>
    )
}

export default ProfilePage;