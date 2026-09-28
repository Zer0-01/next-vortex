import { AdminLoginForm } from "./admin-login-form";

export default function AdminLoginPage() {
  return (
    <main
      id="main-content"
      data-page="admin-login"
      className="flex min-h-svh items-center justify-center p-6"
    >
      <AdminLoginForm />
    </main>
  );
}
