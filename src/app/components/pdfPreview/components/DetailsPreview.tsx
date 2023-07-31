import { CvContext } from "@/app/context/context";
import { AppThemeContext } from "@/app/context/theme-context";
import { useContext } from "react";
import EmailIcon from "@mui/icons-material/Email";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import WebIcon from "@mui/icons-material/Web";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function DetailsPreview() {
    const { details } = useContext(CvContext);
    const { theme } = useContext(AppThemeContext);
    return (
        <div>
            {details.name.length > 0 && (
                <div className="details-name" style={{ color: theme.color }}>
                    {details.name}
                </div>
            )}

            {details.objective.length > 0 && (
                <div className="details-objective" style={{ fontSize: theme.size }}>
                    {details.objective}
                </div>
            )}

            <div className="details-contacts-container">
                {details.email.length > 0 && (
                    <div className="details-contacts-with-icon">
                        <EmailIcon fontSize={theme.iconSize} />
                        <div className="details-contact" style={{ fontSize: theme.size }}>
                            {details.email}
                        </div>
                    </div>
                )}

                {details.phone.length > 0 && (
                    <div className="details-contacts-with-icon">
                        <PhoneAndroidIcon fontSize={theme.iconSize} />
                        <div className="details-contact" style={{ fontSize: theme.size }}>
                            {details.phone}
                        </div>
                    </div>
                )}

                {details.website.length > 0 && (
                    <div className="details-contacts-with-icon" style={{ fontSize: theme.size }}>
                        <WebIcon fontSize={theme.iconSize} />
                        <div className="details-contact" style={{ fontSize: theme.size }}>
                            {details.website}
                        </div>
                    </div>
                )}

                {details.location.length > 0 && (
                    <div className="details-contacts-with-icon" style={{ fontSize: theme.size }}>
                        <LocationOnIcon fontSize={theme.iconSize} />
                        <div className="details-contact" style={{ fontSize: theme.size }}>
                            {details.location}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
