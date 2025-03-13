import { Request, Response } from 'express';
import { CouponService } from '../services/couponService';

export class CouponController {
    private couponService: CouponService;

    constructor() {
        this.couponService = new CouponService();
    }

    public async claimCoupon(req: Request, res: Response): Promise<void> {
        const ip = req.ip;
        const cookieId = req.cookies.couponClaimId;

        try {
            const result = await this.couponService.distributeCoupon(ip, cookieId);
            if (result.success) {
                res.status(200).json({ message: 'Coupon claimed successfully!', coupon: result.coupon });
            } else {
                res.status(429).json({ message: result.message });
            }
        } catch (error) {
            res.status(500).json({ message: 'An error occurred while claiming the coupon.' });
        }
    }

    public getStatus(req: Request, res: Response): void {
        const cookieId = req.cookies.couponClaimId;
        const status = this.couponService.getClaimStatus(cookieId);
        res.status(200).json(status);
    }
}