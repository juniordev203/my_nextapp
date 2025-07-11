"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PlusCircle } from "lucide-react"

export function CreateDeckDialog() {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [open, setOpen] = useState(false)

    const handleCreateDeck = async () => {
        // TODO: Gọi API backend của mày ở đây để tạo deck mới
        // Ví dụ: await createDeckAPI({ name, description })
        console.log("Creating deck:", { name, description })

        // Sau khi tạo thành công, đóng dialog và reset form
        setName("")
        setDescription("")
        setOpen(false)
        // Có thể cần gọi router.refresh() để cập nhật lại danh sách
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button>
                    <PlusCircle className="mr-2 h-4 w-4" /> Tạo bộ từ mới
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Tạo bộ từ mới</DialogTitle>
                    <DialogDescription>
                        Hãy đặt một cái tên thật hay cho bộ từ vựng của bạn.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Tên
                        </Label>
                        <Input
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="col-span-3"
                            placeholder="Vd: TOEIC Part 5 Verbs"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="description" className="text-right">
                            Mô tả
                        </Label>
                        <Input
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="col-span-3"
                            placeholder="Vd: Các động từ hay gặp..."
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit" onClick={handleCreateDeck}>
                        Tạo
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}