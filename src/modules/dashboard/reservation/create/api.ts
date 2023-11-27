export const reservationCreateRequest = async (payload: Prisma.ReservationCreateInput) => {
  return await prisma.reservation.create({ data: payload });
};
