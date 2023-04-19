function Footer() {
  return (
    <footer className="page-footer">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <p className="grey-text text-lighten-4 right">
            REPO
          </p>
        </div>
      </div>
    </footer>
  );
}
export { Footer };