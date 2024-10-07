import { Button } from "@/components/ui/button";
import { AIChatSession } from "@/services/AIModal";
import { Brain, LoaderCircle } from "lucide-react";
import React, { useContext, useState } from "react";
// import {
//   BtnBold,
//   BtnBulletList,
//   BtnClearFormatting,
//   BtnItalic,
//   BtnLink,
//   BtnNumberedList,
//   BtnStrikeThrough,
//   BtnStyles,
//   BtnUnderline,
//   Editor,
//   EditorProvider,
//   HtmlButton,
//   Separator,
//   Toolbar,
// } from "react-simple-wysiwyg";

import {
  Editor,
  EditorContext,
  EditorProvider,
  BtnBold,
  BtnBulletList,
  BtnClearFormatting,
  BtnItalic,
  BtnLink,
  BtnNumberedList,
  BtnRedo,
  BtnStrikeThrough,
  BtnStyles,
  BtnUnderline,
  BtnUndo,
  HtmlButton,
  Separator,
  Toolbar,
} from "react-simple-wysiwyg";

import { toast } from "sonner";

const PROMPT =
  "position titile: {positionTitle} , Depends on position title give me 5-7 bullet points for my experience in resume (Please do not add experince level and No JSON array) , give me result in HTML tags";

function RichTextEditor({ onRichTextEditorChange, index, defaultValue }) {
  const [value, setValue] = useState(defaultValue);
  const [loading, setLoading] = useState(false);
  const GenerateSummeryFromAI = async () => {
    setLoading(true);
    const prompt = PROMPT.replace("{positionTitle}", "Full Stack engineer");

    const result = await AIChatSession.sendMessage(prompt);
    console.log(result.response.text());
    const resp = result.response.text();
    setValue(resp.replace("[", "").replace("]", ""));
    setLoading(false);
  };

  return (
    <div>
      <div className="flex justify-between my-2">
        <label className="text-gray-600 font-normal italic mt-4 mb-2">
          Achievements/Tasks
        </label>

        <Button
          variant="outline"
          size="sm"
          onClick={GenerateSummeryFromAI}
          disabled={loading}
          className="flex gap-2 border-primary text-primary"
        >
          {loading ? (
            <LoaderCircle className="animate-spin" />
          ) : (
            <>
              <Brain className="h-4 w-4" /> Generate from AI
            </>
          )}
        </Button>
      </div>
      <EditorProvider>
        <Editor
          value={value}
          onChange={(e) => {
            const newValue = e.target.value;
            console.log("e.target.value", e.target.value);

            setValue(newValue);
            onRichTextEditorChange(e);
          }}
        >
          {/* <Toolbar>
            <BtnBold />
            <BtnItalic />
            <BtnUnderline />
            <BtnStrikeThrough />
            <Separator />
            <BtnNumberedList />
            <BtnBulletList />
            <Separator />
            <BtnLink />
          </Toolbar> */}

          <Toolbar>
            <BtnUndo />
            <BtnRedo />
            <Separator />
            <BtnBold />
            <BtnItalic />
            <BtnUnderline />
            <BtnStrikeThrough />
            <Separator />
            <BtnNumberedList />
            <BtnBulletList />
            <Separator />
            <BtnLink />
            <BtnClearFormatting />
            <HtmlButton />
            <Separator />
            <BtnStyles />
          </Toolbar>
        </Editor>
      </EditorProvider>
    </div>
  );
}

export default RichTextEditor;
