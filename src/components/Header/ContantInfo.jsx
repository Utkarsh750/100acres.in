import { Phone } from "lucide-react";

export const ContactInfo = () => {
  return (
    <div className="flex items-center space-x-2">
      <Phone className="w-8 h-8 text-green-600" />
      <span className="text-lg font-semibold">8076710376</span>
    </div>
  );
};
