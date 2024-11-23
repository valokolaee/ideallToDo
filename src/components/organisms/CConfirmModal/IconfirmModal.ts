export interface IConfirmModal {

    icon?: string;

    strings?: {
        title?: string;
        massage?: string;
        yesMassage?: string;
        noMassage?: string;
    }

    onConfirm?: () => void;
    onDeny?: () => void;
}