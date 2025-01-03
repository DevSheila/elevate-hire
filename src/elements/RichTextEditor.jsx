import { Button } from "@/components/ui/button";
import { WORK_EXPERIENCE_PROMPT } from "@/constants/Prompts";
import { AIChatSession } from "@/services/AIModal"; 
import { Brain, LoaderCircle } from "lucide-react";
import React, { useContext, useState } from "react";
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



function RichTextEditor({ name, index, prompt,defaultValue ,onRichTextEditorChange }) {
  const [value, setValue] = useState(defaultValue);
  const [loading, setLoading] = useState(false);
  const GenerateSummeryFromAI = async () => {
    setLoading(true);
    const prompt = WORK_EXPERIENCE_PROMPT.replace(
      "{positionTitle}",
      "Full Stack engineer"
    );

    const result = await AIChatSession.sendMessage(prompt);
    console.log(result.response.text());
    const resp = result.response.text();
    setValue(
      resp.replace("[", "").replace("]", "").replace('"', "").replace('","', "")
    );
    setLoading(false);
  };

  return (
    <div>
      <div className="flex justify-between my-2">
        <Button
          variant="outline"
          size="sm"
          onClick={GenerateSummeryFromAI}
          disabled={loading}
          className="flex gap-2 border-primary text-primary rounded-full"
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

      <div className=" mb-2  outline-none p-0">
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
            </Toolbar>
          </Editor>
        </EditorProvider>
      </div>
    </div>
  );
}

export default RichTextEditor;
