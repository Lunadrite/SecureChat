import Logo from "/logo.svg";

export default function Header() {
  return (
    <header className="bg-[#0D1626] h-[73px] text-white flex justify-between items-center px-8 md:px-16 lg:px-28">
      <div className="Logo-Name text-[30px] font-bold flex gap-2 items-center">
        <img src={Logo} width={50} height={50} />
        <p className="mb-2">SecureChat</p>
      </div>

      <div className="flex justify-end items-start" />
      <ul className="flex gap-[15px] flex-row list-none">
        <li>Donate</li>
        <li>Support</li>
        <li>Documentation</li>
        <button className="bg-linear-to-b/srgb from-[#4D4B88] to-[#2E2C87] cursor-pointer duration-200 rounded-lg px-3 py-0.5 hover:bg-linear-to-r/srgb hover:from-[#4D4B88] hover:to-[#2E2C87]">
          Login
        </button>

        <button className="bg-linear-to-b/srgb from-[#4D4B88] to-[#2E2C87] cursor-pointer duration-200 rounded-lg px-3 py-0.5 hover:bg-linear-to-r/srgb hover:from-[#4D4B88] hover:to-[#2E2C87]">
          Register
        </button>
      </ul>
    </header>
  );
}
