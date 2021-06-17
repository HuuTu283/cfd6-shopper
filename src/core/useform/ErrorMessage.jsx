export const ErrorMessage = ({ error }) => {
    if (error) return <p className="error-text">{error}</p>
    return null;
}