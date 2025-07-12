// app/(main)/page.tsx

import { DeckCard } from "@/components/shared/DeckCard"
import { CreateDeckDialog } from "@/components/shared/CreateDeckDialog"
import { SidebarTrigger } from "@/components/ui/sidebar"

// Hàm này giả lập việc gọi API để lấy danh sách các bộ từ
// Trong dự án thật, mày sẽ gọi API backend của mày ở đây
async function getDecks() {
    // --- Giả lập dữ liệu ---
    // TODO: Thay thế bằng lời gọi API thật
    // const decks = await fetch('your-api-endpoint/decks').then(res => res.json());
    // return decks;
    return [
        {
            id: "1",
            name: "TOEIC Business Vocabulary",
            description: "Vocabulary for business contexts in TOEIC.",
            cardCount: 50,
        },
        {
            id: "2",
            name: "Irregular Verbs",
            description: "Common irregular verbs used in TOEIC.",
            cardCount: 120,
        },
        {
            id: "3",
            name: "TOEIC Part 5 Common Traps",
            description: "Common traps in Part 5 of the TOEIC test.",
            cardCount: 75,
        },
    ]
}


export default async function HomePage() {
    const decks = await getDecks()

    return (
        <main className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
                <div className="flex gap-2 items-center">
                    <SidebarTrigger />
                    <h1 className="text-3xl font-bold tracking-tight">Vocabulary</h1>
                </div>
                <CreateDeckDialog />
            </div>

            {decks.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {decks.map((deck) => (
                        <DeckCard
                            key={deck.id}
                            id={deck.id}
                            name={deck.name}
                            description={deck.description}
                            cardCount={deck.cardCount}
                        />
                    ))}
                </div>
            ) : (
                <div className="text-center py-16 border-2 border-dashed rounded-lg">
                    <h2 className="text-xl font-semibold">Have not Vocabulary</h2>
                    <p className="text-muted-foreground mt-2">
                        Please create first vocabulary deck to start learning.
                    </p>
                </div>
            )}
        </main>
    )
}