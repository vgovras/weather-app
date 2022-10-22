import { ErrorType, UserError } from './user.error';

const create = (message: string, type: ErrorType = ErrorType.PreconditionFailed) => new UserError(type, message);

export const errors = {
    badRequest: create('bad_request', ErrorType.BadRequest),
    unauthorized: create('Unauthorized', ErrorType.Unauthorized),
    userBm: {
        notFound: create('user_bm_not_found', ErrorType.NotFound),
        notActive: create('user_bm_is_not_active', ErrorType.NotFound),
        canBeOpened: create('user_bm_can_be_opened', ErrorType.BadRequest),
    },
    bm: {
        noGifts: create('bm_has_no_gifts', ErrorType.NotFound),
        isNotAvailable: create('bm_is_not_available', ErrorType.BadRequest),
        isExpired: create('bm_is_expired', ErrorType.BadRequest),
        isOpened: create('bm_is_opened', ErrorType.BadRequest),
    },
    campaign: {
        noActiveCampaigns: create('no_active_campaigns_found', ErrorType.NotFound),
        noActiveBms: create('campaign_has_no_active_bms', ErrorType.NotFound),
    },
    account: {
        notFound: create('account_not_found', ErrorType.NotFound),
    },
};
