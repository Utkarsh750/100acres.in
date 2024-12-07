import { Building2 } from "lucide-react";

export const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <Building2 className="w-8 h-8 text-green-600" />
      <span className="text-xl font-bold text-gray-800">Signature Global</span>
    </div>
  );
};
