import { Form, Link } from "react-router";
import type { Route } from "./+types/home";
import { ModeToggle } from "~/components/ui/mode-toggle";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Divide, Icon, UserIcon } from "lucide-react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Organiza Aí" },
    {
      name: "description",
      content:
        "Organiza Aí - Mantenha a ordem. Inicia sua auditoria com disciplina",
    },
  ];
}

export default function Home() {
  return (
    <main className="container mx-auto">
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>
      <div className="flex min-h-screen flex-col items-center justify-center gap-4">
        <h1 className="grid text-2xl font-bold text-center">Organiza Aí</h1>
        <h2 className="text-sm text-center">
          Mantenha a ordem. Inicia sua auditoria com disciplina
        </h2>
        <Card className="w-full max-w-sm">
          <CardHeader></CardHeader>
          <Form className="grid gap-6" method="GET" action="/dashboard">
            <CardContent>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Usuário
                  </label>

                  <input
                    type="text"
                    placeholder={`Digite seu usuário`}
                    className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    required
                    name="username"
                  />
                </div>
                <div className="grid gap-2">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Senha
                  </label>
                  <input
                    type="password"
                    placeholder="Digite sua senha"
                    className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    required
                    name="password"
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              <Button
                type="submit"
                variant="default"
                className="cursor-pointer w-full"
              >
                Acessar Sistema
              </Button>
              <div className="text-sm text-center text-secondary hover:underline cursor-pointer">
                Esqueceu sua senha?
              </div>
            </CardFooter>
          </Form>
        </Card>
      </div>
    </main>
  );
}
