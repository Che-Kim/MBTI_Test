def get_mbti():
    print("Welcome to the MBTI Test Program!")
    # Initialize scores
    scores = {'I': 0, 'E': 0, 'S': 0, 'N': 0, 'T': 0, 'F': 0, 'J': 0, 'P': 0}

    # Expanded list of questions
    questions = [
        ("You're almost always energized by social gatherings and parties. (E/I)", 'E', 'I'),
        ("You often spend time exploring unrealistic yet intriguing ideas. (N/S)", 'N', 'S'),
        ("Logic and consistency are more important to you than personal circumstances. (T/F)", 'T', 'F'),
        ("You believe it's better to finish projects completely before starting a new one. (J/P)", 'J', 'P'),
        ("You enjoy having a wide circle of acquaintances. (E/I)", 'E', 'I'),
        ("You rely more on your experience than your imagination. (S/N)", 'S', 'N'),
        ("You often think about how emotions influence people around you. (F/T)", 'F', 'T'),
        ("You prefer to keep your options open and are more spontaneous than planned. (P/J)", 'P', 'J')
    ]

    # Process each question
    for question, option1, option2 in questions:
        print(question)
        answer = input("Type E/I, N/S, T/F, or J/P: ").upper()
        if answer in [option1, option2]:
            scores[answer] += 1

    # Determine MBTI type
    mbti_type = ''
    mbti_type += 'E' if scores['E'] > scores['I'] else 'I'
    mbti_type += 'S' if scores['S'] > scores['N'] else 'N'
    mbti_type += 'T' if scores['T'] > scores['F'] else 'F'
    mbti_type += 'J' if scores['J'] > scores['P'] else 'P'

    print(f"\nYour MBTI type is: {mbti_type}")
    show_personality_description(mbti_type)

def show_personality_description(mbti_type):
    descriptions = {
        "ISTJ": "Practical and fact-minded individuals, whose reliability cannot be doubted.",
        "ISFJ": "Very dedicated and warm protectors, always ready to defend their loved ones.",
        "INFJ": "Quiet and mystical, yet very inspiring and tireless idealists.",
        "INTJ": "Proud 'architects', with an imaginative and strategic mind, and a plan for everything.",
        "ISTP": "Tolerant and flexible, quiet observers until a problem appears, then act quickly to find workable solutions.",
        "ISFP": "Quiet, friendly, sensitive, and kind. Enjoy the present moment, what's going on around them.",
        "INFP": "Idealistic, loyal to their values and to people who are important to them.",
        "INTP": "Seek to develop logical explanations for everything that interests them.",
        "ESTP": "Flexible and tolerant, take a pragmatic approach focused on immediate results.",
        "ESFP": "Outgoing, friendly, and accepting.",
        "ENFP": "Warmly enthusiastic and imaginative.",
        "ENTP": "Quick, ingenious, stimulating, alert, and outspoken.",
        "ESTJ": "Practical, realistic, matter-of-fact.",
        "ESFJ": "Warmhearted, conscientious, and cooperative.",
        "ENFJ": "Warm, empathetic, responsive, and responsible.",
        "ENTJ": "Frank, decisive, assume leadership readily."
    }

    description = descriptions.get(mbti_type, "An interesting and unique individual!")
    print(f"\nPersonality Description: {description}")

if __name__ == "__main__":
    get_mbti()
