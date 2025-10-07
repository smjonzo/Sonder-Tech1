export const InvestmentInterest = {
  async create(payload) {
    if (!payload?.name || !payload?.email) {
      throw new Error("Name and email are required");
    }

    // In a real application this would post to an API endpoint.
    // We simulate a network request so the UI can display loading state.
    await new Promise((resolve) => setTimeout(resolve, 400));

    return {
      success: true,
      data: {
        ...payload,
        submittedAt: new Date().toISOString(),
      },
    };
  },
};
