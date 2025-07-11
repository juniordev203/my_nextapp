import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Settings, Trash2 } from "lucide-react"

type DeckCardProps = {
    id: string;
    name: string;
    description: string;
    cardCount: number;
}

export function DeckCard({ name, description, cardCount }: DeckCardProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center justify-between">
                    <span>{name}</span>
                    <div className="flex items-center gap-2">
                        {/* TODO: Add logic for these buttons */}
                        <Button variant="ghost" size="icon">
                            <Settings className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="text-red-500 hover:text-red-600">
                            <Trash2 className="h-4 w-4" />
                        </Button>
                    </div>
                </CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground">{cardCount} từ vựng</p>
            </CardContent>
            <CardFooter>
                <Button className="w-full">
                    <BookOpen className="mr-2 h-4 w-4" /> Học ngay
                </Button>
            </CardFooter>
        </Card>
    )
}