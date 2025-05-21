import { BaseEditor, Transforms } from "slate"
import { ReactEditor } from "slate-react"
import { Editor } from "slate"

export class CustomEditor {
    constructor(public editor: BaseEditor & ReactEditor) {
    }
    
    isBoldMarkActive() {
        const marks = Editor.marks(this.editor)
        return marks ? marks.bold === true : false
    }

    isCodeBlockActive() {
        const [match] = Editor.nodes(this.editor, {
        match: n => n.type === 'code',
        })

        return !!match
    }

    toggleBoldMark() {
        const isActive = this.isBoldMarkActive()
        if (isActive) {
        Editor.removeMark(this.editor, 'bold')
        } else {
        Editor.addMark(this.editor, 'bold', true)
        }
    }

    toggleCodeBlock() {
        const isActive = this.isCodeBlockActive()
        Transforms.setNodes(
        this.editor,
        { type: isActive ? null : 'code' },
        { match: n => Element.isElement(n) && Editor.isBlock(this.editor, n) }
        )
    }
}