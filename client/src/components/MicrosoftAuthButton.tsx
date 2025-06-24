import { Button } from "@/components/ui/button";

const MicrosoftAuthButton = () => {
  const handleMicrosoftLogin = () => {
    console.log("Microsoft login clicked");
    // Add OAuth logic here
  };

  return (
    <Button
      onClick={handleMicrosoftLogin}
      variant="outline"
      className="w-full h-12 text-black border-gray-300 hover:bg-gray-50 mb-6"
    >
      <svg className="w-5 h-5 mr-3" viewBox="0 0 23 23">
        <path fill="#000000" d="M0 0h11v11H0z" />
        <path fill="#000000" d="M12 0h11v11H12z" />
        <path fill="#000000" d="M0 12h11v11H0z" />
        <path fill="#000000" d="M12 12h11v11H12z" />
      </svg>
      Continue with Microsoft
    </Button>
  );
};

export default MicrosoftAuthButton;
