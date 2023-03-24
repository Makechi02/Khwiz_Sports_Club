const LoginCard = () => {
    return (
        <div className="login-card">
            <div className="logo-details">
                <div className="logo">KSC</div>
                <div className="titles">
                    <div className="title">Khwiz Sports Club</div>
                    <div className="sub-title">We nurture you</div>
                </div>
            </div>
            <h2>Log In</h2>
            <form action="" className="login-form">
                <input type="text" placeholder="Username" />
                <input type="text" placeholder="Password" />
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        fontSize: "0.9rem",
                    }}
                >
                    <label
                        htmlFor="loggedIn"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",
                        }}
                    >
                        <input
                            type="checkbox"
                            name="loggedIn"
                            id="logged-in"
                            checked
                        />
                        Keep me logged in
                    </label>
                    <p className="access-link">forgot password</p>
                </div>
                <input type="submit" value="Log In" />

                <p className="access-link">Don't have an account? Register </p>
            </form>

            <p className="policy access-link">
                Terms of Service | Privacy Policy
            </p>
        </div>
    );
};

export default LoginCard;
