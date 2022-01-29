import { useRouter } from "next/router";

export default function PaginaDoChat() {
  const router = useRouter();
  return (
    <>
      <h1>Página do Chat</h1>
      <button
        onClick={function (e) {
          e.preventDefault();
          router.push("/");
        }}
        style={{ width: "100px", heigth: "100px" }}
      >
        Home
      </button>
    </>
  );
}
