import InputLabel from "@/components/InputLabel";
import TextInput from "@/components/TextInput";
export default function TrackingCodeFormFields({ data, setData }) {
    return (
        <>
            <div>
                <InputLabel value="Name" />
                <TextInput
                    value={data.name}
                    onChange={(e) => setData("name", e.target.value)}
                />
            </div>

            <div>
                <InputLabel value={"Tracking Script (no <script> tags)"} />
                <textarea
                    value={data.script}
                    onChange={(e) => setData("script", e.target.value)}
                    rows={8}
                    className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 w-full"
                />
            </div>
        </>
    );
}
