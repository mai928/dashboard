"use client"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Bell,
  CheckCircle,
  CreditCard,
  FileCode,
  ShoppingCart,
  Sparkles,
} from "lucide-react";
import { SiAdobe } from "react-icons/si";
import { ordersData } from "../../data";

// A helper component to render the correct icon based on the 'type'
const OrderIcon = ({ type, color }) => {
  const commonProps = {
    size: 20,
    className: `p-1 rounded-full bg-white/10 ${color}`,
  };

  switch (type) {
    case "bell":
      return <Bell {...commonProps} />;
    case "code":
      return <FileCode {...commonProps} />;
    case "cart":
      return <ShoppingCart {...commonProps} />;
    case "card":
      return <CreditCard {...commonProps} />;
    case "sparkles":
      return <Sparkles {...commonProps} />;
    case "xd":
      // react-icons don't accept className for sizing, so we handle it manually
      return <div className={`p-1 rounded-full bg-white/10`}><SiAdobe size={20} className={color} /></div>;
    default:
      return null;
  }
};

export default function Order() {
  return (
    <div className="min-h-screen z-10">
      <Card className="bg-card-gradient  border-none text-white rounded-2xl w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Orders overview</CardTitle>
          <CardDescription className="flex items-center gap-2 text-green-400 mt-1">
            <CheckCircle size={16} />
            <span>+30% this month</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8 py-2 z-10">
            {ordersData.map((order, index) => (
              <div key={order.id} className="flex gap-4">
                {/* Icon and Timeline */}
                <div className="relative ">
                  <div className="flex items-center justify-center h-8 w-8">
                    <OrderIcon type={order.iconType} color={order.iconColor} />
                  </div>
                  {/* Render the line only if it's NOT the last item */}
                  {index < ordersData.length - 1 && (
                    <div className="absolute left-1/2 top-8 w-px h-full -translate-x-1/2 bg-gray-600" />
                  )}
                </div>

                {/* Text Content */}
                <div>
                  <p className="font-medium">{order.title}</p>
                  <p className="text-sm text-gray-400">{order.timestamp}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}