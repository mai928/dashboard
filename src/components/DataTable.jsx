// components/projects-dashboard.tsx
"use client"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";

import { CheckCircle2, MoreVertical } from "lucide-react";
import { FaJira, FaSlack } from "react-icons/fa";
import { SiAdobe, SiInvision, SiSpotify } from "react-icons/si";
import { tableData } from "../../data";

// You can create a more robust data structure and fetching mechanism

// A small helper component to render the correct company icon
const CompanyIcon = ({ type }) => {
    const iconSize = 24;
    switch (type) {
        case "xd":
            return <SiAdobe size={iconSize} className="text-pink-500" />;
        case "jira":
            return <FaJira size={iconSize} className="text-blue-500" />;
        case "slack":
            return <FaSlack size={iconSize} className="text-green-500" />;
        case "spotify":
            return <SiSpotify size={iconSize} className="text-green-400" />;
        case "invision":
            return <SiInvision size={iconSize} className="text-red-500" />;
        default:
            return <div className="w-6 h-6 bg-gray-500 rounded-sm" />;
    }
};


export default function DataTable() {
    // Helper to format budget
    const formatBudget = (budget) => {
        if (budget === null) {
            return "Not set";
        }
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(budget);
    };

    return (
          <div className="min-h-screen  ">
            <Card className="bg-card-gradient border-none text-white rounded-2xl">
                <CardHeader className="flex flex-row justify-between items-start">
                    <div>
                        <CardTitle className="text-2xl font-bold">Projects</CardTitle>
                        <CardDescription className="flex items-center gap-2 text-green-400 mt-2">
                            <CheckCircle2 size={18} />
                            <span>30 done this month</span>
                        </CardDescription>
                    </div>
                    <MoreVertical className="text-gray-400" />
                </CardHeader>
                <CardContent className='p-0 lg:p-6'>
                    {/* ================================================================== */}
                    {/* DESKTOP TABLE (HIDDEN ON SMALL SCREENS - `md:table` and up)      */}
                    {/* ================================================================== */}
                    <Table className="hidden md:table">
                        <TableHeader>
                            <TableRow className="border-b-gray-700 hover:bg-transparent">
                                <TableHead className="text-gray-400 uppercase text-xs">Companies</TableHead>
                                <TableHead className="text-gray-400 uppercase text-xs">Members</TableHead>
                                <TableHead className="text-gray-400 uppercase text-xs">Budget</TableHead>
                                <TableHead className="text-gray-400 uppercase text-xs">Completion</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {tableData.map((project) => (
                                <TableRow key={project.id} className="border-b-gray-700 hover:bg-[#1f1f2b]">
                                    <TableCell className="font-medium py-4">
                                        <div className="flex items-center gap-4">
                                            <CompanyIcon type={project.companyIcon.type} />
                                            <span>{project.name}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center">
                                            <TooltipProvider delayDuration={100}>
                                                {project.members.map((member, index) => (
                                                    <Tooltip key={member.name}>
                                                        <TooltipTrigger asChild>
                                                            <Avatar className={`w-8 h-8 border-2 border-[#181824] ${index > 0 ? "-ml-3" : ""}`}>
                                                                <AvatarImage src={member.image} alt={member.name} />
                                                            </Avatar>
                                                        </TooltipTrigger>
                                                        <TooltipContent className="bg-black text-white border-gray-700">
                                                            <p>{member.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                ))}
                                            </TooltipProvider>
                                        </div>
                                    </TableCell>
                                    <TableCell className="font-bold">{formatBudget(project.budget)}</TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-4">
                                            <span className="font-bold w-12">{project.completion}%</span>
                                            <Progress
                                                value={project.completion}
                                                className="h-[3px] bg-gray-700"
                                                indicatorClassName="bg-blue-500" // Use standard Tailwind color for simplicity
                                            />
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                    {/* ================================================================== */}
                    {/* MOBILE CARD VIEW (HIDDEN ON MEDIUM SCREENS AND UP - below `md:`)  */}
                    {/* ================================================================== */}
                    <div className="md:hidden space-y-4">
                        {tableData.map((project) => (
                            <div key={project.id} className="p-4 rounded-lg bg-[#1f1f2b]/50 border border-gray-700 space-y-3">
                                {/* Row 1: Company Name */}
                                <div className="flex items-center gap-4">
                                    <CompanyIcon type={project.companyIcon.type} />
                                    <span className="font-bold">{project.name}</span>
                                </div>
                                
                                {/* Row 2: Members */}
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-gray-400">Members</span>
                                    <div className="flex items-center">
                                        <TooltipProvider delayDuration={100}>
                                            {project.members.map((member, index) => (
                                                <Tooltip key={member.name}>
                                                    <TooltipTrigger asChild>
                                                        <Avatar className={`w-8 h-8 border-2 border-[#181824] ${index > 0 ? "-ml-3" : ""}`}>
                                                            <AvatarImage src={member.image} alt={member.name} />
                                                        </Avatar>
                                                    </TooltipTrigger>
                                                    <TooltipContent className="bg-black text-white border-gray-700">
                                                        <p>{member.name}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            ))}
                                        </TooltipProvider>
                                    </div>
                                </div>

                                {/* Row 3: Budget */}
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-gray-400">Budget</span>
                                    <span className="font-bold">{formatBudget(project.budget)}</span>
                                </div>

                                {/* Row 4: Completion */}
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center text-sm">
                                         <span className="text-gray-400">Completion</span>
                                        <span className="font-bold">{project.completion}%</span>
                                    </div>
                                    <Progress
                                        value={project.completion}
                                        className="h-[5px] bg-gray-700"
                                        indicatorClassName="bg-blue-500"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}