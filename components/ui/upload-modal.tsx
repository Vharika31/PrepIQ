"use client"

import type React from "react"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Upload } from "lucide-react"

interface UploadModalProps {
  type: "roadmap" | "resume"
  trigger: React.ReactNode
  onUpload?: (data: any) => void
}

export function UploadModal({ type, trigger, onUpload }: UploadModalProps) {
  const [isUploading, setIsUploading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsUploading(true)

    // Simulate upload
    setTimeout(() => {
      setIsUploading(false)
      if (onUpload) {
        onUpload({})
      }
    }, 2000)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>{type === "roadmap" ? "Upload Roadmap" : "Upload Resume"}</DialogTitle>
          <DialogDescription>
            {type === "roadmap"
              ? "Share your preparation journey to help others achieve their goals."
              : "Upload your resume for AI-powered analysis and feedback."}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          {type === "roadmap" ? (
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="title">Title</Label>
                <Input id="title" placeholder="e.g., My Journey to Google" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" placeholder="e.g., Google, Amazon, etc." required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="tags">Tags (comma separated)</Label>
                <Input id="tags" placeholder="e.g., React, DSA, System Design" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your preparation journey..."
                  className="min-h-[100px]"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="file">Roadmap File (optional)</Label>
                <Input id="file" type="file" />
              </div>
            </div>
          ) : (
            <div className="grid gap-4 py-4">
              <div className="flex flex-col items-center justify-center space-y-4 rounded-lg border border-dashed p-8">
                <div className="rounded-full bg-primary/10 p-3">
                  <Upload className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2 text-center">
                  <h3 className="text-lg font-medium">Upload your resume</h3>
                  <p className="text-sm text-muted-foreground">Drag and drop your resume PDF or click to browse</p>
                </div>
                <Input id="resume-file" type="file" className="hidden" />
                <Button type="button" variant="outline" onClick={() => document.getElementById("resume-file")?.click()}>
                  Select File
                </Button>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button type="submit" disabled={isUploading}>
              {isUploading ? "Uploading..." : "Upload"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
