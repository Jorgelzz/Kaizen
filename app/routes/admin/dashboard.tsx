import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import { cn } from "~/lib/utils";

const dashboard = () => {
  const stats = [
    { title: "Setores auditados este mês", thisMonth: 12, lastMonth: 9 },
    {
      title: "Conformidades registradas",
      thisMonth: 200,
      lastMonth: 40,
      conformidades: 200,
      nonConformidades: 10,
    },
  ];
  return (
    <main className="flex justify-center items-center flex-col gap-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="grid xl:grid-cols-3 gap-4 md:grid-cols-2 sm:grid-cols-1 w-full max-h-full">
        <Card>
          <CardContent>
            <span className="text-secondary">{stats[0].title}</span>
            <h2 className="text-2xl font-bold">{stats[0].thisMonth}</h2>
            <p
              className={cn("truncate text-secondary-foreground", {
                "text-green-400": stats[0].lastMonth <= stats[0].thisMonth,
                "text-red-500": stats[0].lastMonth > stats[0].thisMonth,
              })}
            >
              +{stats[0].lastMonth} desde o mês passado
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h1 className="text-secondary">{stats[1].title}</h1>
            <h2 className="text-2xl font-bold">{stats[1].thisMonth}</h2>
            <p
              className={cn("truncate text-secondary-foreground", {
                "text-green-400": stats[1].lastMonth <= stats[1].thisMonth,
                "text-red-500": stats[1].lastMonth > stats[1].thisMonth,
              })}
            >
              +{stats[1].lastMonth} desde o mês passado
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default dashboard;
